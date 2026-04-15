"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

function generateParticles(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const color1 = new THREE.Color("#fbdd08"); // Brand primary (Yellowish)
  const color2 = new THREE.Color("#4f46e5"); // Brand accent (Blue)
  const color3 = new THREE.Color("#9333ea"); // Brand accent (Purple)
  const colors_list = [color1, color2, color3];

  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    const distance = 10 + Math.random() * 20;

    positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = distance * Math.cos(theta);

    const color = colors_list[Math.floor(Math.random() * colors_list.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  return { positions, colors };
}

function ParticleField({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  // Generate random positions and colors
  const { positions, colors } = useMemo(() => generateParticles(count), [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smoothly rotate the whole field
    if (points.current) {
      points.current.rotation.y = time * 0.05;
      points.current.rotation.x = time * 0.02;

      // Slight mouse interaction
      const targetX = mouse.x * 0.5;
      const targetY = mouse.y * 0.5;
      points.current.rotation.x += (targetY - points.current.rotation.x) * 0.05;
      points.current.rotation.y += (targetX - points.current.rotation.y) * 0.05;
    }
  });

  return (
    <group>
      <Points ref={points} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function GalaxyBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#030712"]} />
        <ambientLight intensity={0.5} />
        <ParticleField count={8000} />
      </Canvas>
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
