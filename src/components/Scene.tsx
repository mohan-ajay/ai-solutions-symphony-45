import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function ThreeDCircle() {
  const circleRef = useRef<THREE.Mesh>(null)

  // Add rotation animation
  useFrame(({ clock }) => {
    if (circleRef.current) {
      circleRef.current.rotation.z = clock.getElapsedTime() * 0.2
    }
  })

  return (
    <mesh ref={circleRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3, 0.2, 16, 32]} />
      <meshStandardMaterial color="#4a8fe7" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ThreeDCircle />
        <OrbitControls />
      </Canvas>
    </div>
  )
}