import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Track mouse coordinates
    let mx = width / 2;
    let my = height / 2;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize THREE
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Outer wireframe icosahedron
    const geo = new THREE.IcosahedronGeometry(2.1, 6);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const sphere = new THREE.Mesh(geo, mat);
    sphereGroup.add(sphere);

    // Inner dark sphere
    const coreGeo = new THREE.SphereGeometry(1.7, 48, 48);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x1a0f2e,
      transparent: true,
      opacity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sphereGroup.add(coreMesh);

    // Glow sprite map creation
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = 256;
    spriteCanvas.height = 256;
    const ctx = spriteCanvas.getContext('2d');
    const radialGlow = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    radialGlow.addColorStop(0, 'rgba(91, 33, 182, 0.8)');
    radialGlow.addColorStop(0.4, 'rgba(91, 33, 182, 0.3)');
    radialGlow.addColorStop(1, 'rgba(91, 33, 182, 0)');
    ctx.fillStyle = radialGlow;
    ctx.fillRect(0, 0, 256, 256);

    const glowTexture = new THREE.CanvasTexture(spriteCanvas);
    const spriteMat = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      depthWrite: false,
    });
    const glowSprite = new THREE.Sprite(spriteMat);
    glowSprite.scale.set(9, 9, 1);
    sphereGroup.add(glowSprite);

    // Particle orbits
    const pCount = window.innerWidth < 768 ? 300 : 900;
    const positions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 2.6 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xb9a6f5,
      size: 0.02,
      transparent: true,
      opacity: 0.7,
    });
    const particleSys = new THREE.Points(pGeo, pMat);
    sphereGroup.add(particleSys);

    // Initial scale for mobile
    sphereGroup.scale.setScalar(window.innerWidth < 768 ? 0.6 : 1.0);

    // Animation Loop
    let animationFrameId = null;
    const animateHero = () => {
      const t = Date.now() * 0.0001;

      sphere.rotation.y += 0.0018;
      sphere.rotation.x += 0.0006;
      particleSys.rotation.y -= 0.0009;
      particleSys.rotation.x = Math.sin(t) * 0.1;

      // Parallax effect
      camera.position.x = (mx / window.innerWidth - 0.5) * 0.6;
      camera.position.y = -(my / window.innerHeight - 0.5) * 0.6;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animateHero);
    };

    animateHero();

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      sphereGroup.scale.setScalar(width < 768 ? 0.6 : 1.0);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup Resources
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose Three.js objects
      geo.dispose();
      mat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      glowTexture.dispose();
      spriteMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="sphere-canvas" ref={canvasRef}></canvas>;
}
