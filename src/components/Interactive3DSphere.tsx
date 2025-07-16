import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Interactive3DSphere = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#888" metalness={0.6} roughness={0.2} />
        </mesh>
        <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default Interactive3DSphere;
