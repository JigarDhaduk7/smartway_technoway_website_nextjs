'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Billboard, Float, MeshDistortMaterial, RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { ORBIT_LAYOUT } from './orbitLayout';

const BRAND = '#3d7bff';
const CYAN = '#2dd4ff';
const VIOLET = '#8b6cff';

function ParticleField({ count = 1600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Points in a thick spherical shell around the core
      const r = 3.2 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color={CYAN}
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Logos riding each orbit line (served locally so WebGL can read them).
// Mix of UI/UX, frontend, backend, database and AI, ordered so similar logos aren't adjacent.
const INNER_RING_ICONS = [
  '/assets/images/tech/nextjs-light.png', // frontend
  '/assets/images/tech/figma.png', // UI/UX
  '/assets/images/tech/postgresql.png', // database
  '/assets/images/tech/ai.png', // AI
  '/assets/images/tech/react.png', // frontend
  '/assets/images/tech/laravel.png', // backend
];
const OUTER_RING_ICONS = [
  '/assets/images/tech/typescript.png', // frontend
  '/assets/images/tech/mysql-light.png', // database
  '/assets/images/tech/python.png', // backend / AI
  '/assets/images/tech/adobe-xd.png', // UI/UX
  '/assets/images/tech/nodejs.png', // backend
];

// Glass tile with a technology logo, always turned toward the camera.
function TechTile({
  url,
  position,
  scale,
  tint,
}: {
  url: string;
  position: [number, number, number];
  scale: number;
  tint: string;
}) {
  const texture = useTexture(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  return (
    <Billboard position={position} scale={scale}>
      <RoundedBox args={[0.36, 0.36, 0.045]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color="#141d36" metalness={0.6} roughness={0.25} emissive={tint} emissiveIntensity={0.14} />
      </RoundedBox>
      <mesh position={[0, 0, 0.024]}>
        <planeGeometry args={[0.25, 0.25]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </Billboard>
  );
}

// An orbit line with logo tiles placed exactly on it. The tiles are children of the
// ring, so they stay on the line while it spins (torus geometry lies in the local XY plane).
function OrbitRing({
  radius,
  thickness,
  color,
  opacity,
  rotation,
  speed,
  icons,
  tileScale,
}: {
  radius: number;
  thickness: number;
  color: string;
  opacity: number;
  rotation: [number, number, number];
  speed: number;
  icons: string[];
  tileScale: number;
}) {
  const ring = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={rotation}>
      <group ref={ring}>
        <mesh>
          <torusGeometry args={[radius, thickness, 16, 200]} />
          <meshBasicMaterial color={color} transparent opacity={opacity} toneMapped={false} />
        </mesh>
        {icons.map((url, i) => {
          const angle = (i / icons.length) * Math.PI * 2;
          return (
            <Suspense key={url} fallback={null}>
              <TechTile
                url={url}
                position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
                scale={tileScale}
                tint={color}
              />
            </Suspense>
          );
        })}
      </group>
    </group>
  );
}

function Core() {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    // Ease toward the pointer for a parallax tilt
    const { x, y } = state.pointer;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, x * 0.45, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -y * 0.3, 0.05);

    // Scroll pushes the core up and away
    const p = Math.min(window.scrollY / window.innerHeight, 1.2);
    g.position.y = THREE.MathUtils.lerp(g.position.y, p * 1.6, 0.08);
    const s = 1 - p * 0.25;
    g.scale.setScalar(THREE.MathUtils.lerp(g.scale.x, s, 0.08));

    if (shell.current) {
      shell.current.rotation.y += delta * 0.12;
      shell.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh>
          <icosahedronGeometry args={[1.35, 24]} />
          <MeshDistortMaterial
            color={BRAND}
            emissive="#1a3d8f"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.85}
            distort={0.38}
            speed={1.8}
          />
        </mesh>
        <mesh ref={shell} scale={1.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.22} />
        </mesh>
      </Float>
      <OrbitRing
        radius={2.05}
        thickness={0.008}
        color={CYAN}
        opacity={0.6}
        rotation={[Math.PI / 2.3, 0.2, 0]}
        speed={0.3}
        icons={INNER_RING_ICONS}
        tileScale={0.66}
      />
      <OrbitRing
        radius={2.05}
        thickness={0.006}
        color={VIOLET}
        opacity={0.45}
        rotation={[Math.PI / 1.8, -0.4, 0.3]}
        speed={-0.22}
        icons={OUTER_RING_ICONS}
        tileScale={0.74}
      />
    </group>
  );
}

// Layout reference for auto placement (kept at the original outer size so tuned
// orbitLayout.ts positions do not shift). Both visible rings are now radius 2.05.
const OUTER_RING_RADIUS = 2.85;
const SHELL_RADIUS = 2.36;

// Positions the whole orbit from the settings in ./orbitLayout.ts.
// In 'auto' mode (desktop) its left edge (outer ring) starts just right of where the
// headline ends, scaling down only when the sphere would no longer fit.
function Placement({ textRight, children }: { textRight: number | null; children: React.ReactNode }) {
  const { viewport, size } = useThree();
  const { mode, desktop, tablet, mobile, auto } = ORBIT_LAYOUT;

  let position: [number, number, number];
  let scale: number;

  if (size.width < 768) {
    position = [mobile.x, mobile.y, -1];
    scale = mobile.scale;
  } else if (size.width < 1024) {
    position = [tablet.x, tablet.y, 0];
    scale = tablet.scale;
  } else if (mode === 'manual' || textRight === null) {
    position = [desktop.x, desktop.y, 0];
    scale = desktop.scale;
  } else {
    const halfW = viewport.width / 2;
    const textEdge = (textRight / size.width) * viewport.width - halfW + auto.gap;
    const fit = (halfW + auto.rightBleed - textEdge) / (OUTER_RING_RADIUS + SHELL_RADIUS);
    scale = Math.min(auto.maxScale, Math.max(auto.minScale, fit));
    position = [textEdge + OUTER_RING_RADIUS * scale + auto.offsetX, auto.y, 0];
  }

  return (
    <group position={position} scale={scale}>
      {children}
    </group>
  );
}

// Right edge (in px) of the hero headline and intro text, measured from the actual glyphs.
function useHeroTextRight() {
  const [right, setRight] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      let max = 0;
      // Measure text nodes only: the headline's line wrappers are full-width blocks.
      const range = document.createRange();
      document.querySelectorAll('[data-hero-text]').forEach((el) => {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          if (!node.textContent?.trim()) continue;
          range.selectNodeContents(node);
          for (const rect of range.getClientRects()) max = Math.max(max, rect.right);
        }
      });
      setRight(max || null);
    };
    measure();
    document.fonts?.ready.then(measure);
    const t = setTimeout(measure, 1200);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return right;
}

export default function HeroScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [compact, setCompact] = useState(false);
  const textRight = useHeroTextRight();

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const onResize = () => setCompact(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    const el = wrapper.current;
    if (!el) return () => window.removeEventListener('resize', onResize);
    // Stop rendering when the hero is scrolled out of view
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => {
      io.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={reduced ? 'demand' : visible ? 'always' : 'never'}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 3, 4]} intensity={60} color={CYAN} />
        <pointLight position={[-4, -2, 3]} intensity={50} color={VIOLET} />
        <pointLight position={[0, 4, -3]} intensity={40} color={BRAND} />
        <Placement textRight={textRight}>
          <Core />
        </Placement>
        <ParticleField count={compact ? 800 : 1600} />
      </Canvas>
    </div>
  );
}
