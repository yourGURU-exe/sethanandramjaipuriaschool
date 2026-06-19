import { Float, Line, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function AcademicConstellation() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    return Array.from({ length: 42 }, (_, index) => {
      const angle = index * 0.72;
      const radius = 3.6 + Math.sin(index) * 1.2;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(index * 0.43) * 1.6,
        Math.sin(angle) * radius
      );
    });
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.035 + pointer.x * 0.16;
    group.current.rotation.x = pointer.y * 0.08;
  });

  return (
    <group ref={group}>
      {points.map((point, index) => (
        <Float key={index} speed={1.1} rotationIntensity={0.35} floatIntensity={0.6}>
          <mesh position={point}>
            <sphereGeometry args={[index % 7 === 0 ? 0.045 : 0.026, 16, 16]} />
            <meshStandardMaterial color={index % 6 === 0 ? "#D4AF37" : "#F8F9FA"} emissive="#D4AF37" emissiveIntensity={0.18} />
          </mesh>
        </Float>
      ))}
      {points.slice(0, 18).map((point, index) => (
        <Line
          key={`line-${index}`}
          points={[point, points[(index + 7) % points.length]]}
          color="#D4AF37"
          transparent
          opacity={0.15}
          lineWidth={0.65}
        />
      ))}
    </group>
  );
}

function GoldDust() {
  const particles = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const data = new Float32Array(900);
    for (let i = 0; i < data.length; i += 3) {
      data[i] = (Math.random() - 0.5) * 12;
      data[i + 1] = (Math.random() - 0.5) * 7;
      data[i + 2] = (Math.random() - 0.5) * 8;
    }
    return data;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!particles.current) return;
    particles.current.rotation.y = clock.elapsedTime * 0.018 + pointer.x * 0.035;
    particles.current.rotation.x = pointer.y * 0.018;
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#D4AF37" size={0.025} transparent opacity={0.72} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

export default function ThreeEnvironment() {
  return (
    <div className="three-environment" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.35, 6], fov: 55 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 4]} intensity={1.2} color="#f8f1d0" />
        <pointLight position={[-2, -1, 3]} intensity={2.2} color="#D4AF37" />
        <GoldDust />
        <AcademicConstellation />
        <Sparkles count={70} scale={[7, 4, 5]} speed={0.22} color="#D4AF37" size={1.4} opacity={0.45} />
      </Canvas>
    </div>
  );
}
