import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn, faStethoscope, faGears, faHexagonNodes, faSignHanging, faVrCardboard, faChartLine,
  faCloud, faNetworkWired, faGraduationCap, faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { useMotionValue, useMotionTemplate, motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import ThreeDSphere from './ThreeDSphere';
import logo_check from '../../public/logo_black.png';

interface Orbit {
  width: number;
  height: number;
  speed: number;
  color: string;
  pathColor: string;
  rotation: string;
  items?: Array<{ label: string; icon: any }>;
}

interface Industry {
  label: string;
  icon: any;
}

const industries: Industry[] = [
  { label: 'AI', icon: faHexagonNodes},
  { label: 'Cloud Migration', icon: faCloud },
  { label: 'Networking', icon: faNetworkWired },
  { label: 'Edtech', icon: faGraduationCap },
  { label: 'Cyber Security', icon: faSignHanging },
  { label: 'Digital Marketing', icon: faChartLine },
  { label: 'Real Estate', icon: faBuilding }
];

const Mini3DSphere = ({ icon, label, width = 140, height = 140 }: { icon: any, label: string, width?: number, height?: number }) => {
  return (
    <div className="w-full h-full" style={{ width, height, position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }} style={{ width: '100%', height: '100%', borderRadius: '50%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color="#888" 
            metalness={0.6} 
            roughness={0.2} 
            emissive="#d3d3d3"
            emissiveIntensity={0.1}
          />
        </mesh>
        <OrbitControls 
          enableZoom={false} 
          autoRotate={true} 
          autoRotateSpeed={3}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white text-center">
          <FontAwesomeIcon icon={icon} className="text-xl mb-1" />
          <p className="text-xs mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
};

const AllIndustries = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [randomBinary, setRandomBinary] = useState("");
  const animationRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const progressRef = useRef<number[]>([]);
  
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  useEffect(() => {
    // Generate random binary string
    let str = "";
    for (let i = 0; i < 15000; i++) {
      str += Math.random() > 0.5 ? "1" : "0";
    }
    setRandomBinary(str);

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      stopAnimation();
    };
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const orbits: Orbit[] = [
    { 
      width: 700,
      height: 700, // Make width and height equal for a perfect circle
      speed: 20, 
      color: 'from-purple-600 to-purple-700', 
      pathColor: 'rgba(160, 100, 255, 0.3)',
      rotation: '' // Remove 3D rotation for a flat circle
    },
    { 
      width: 450,
      height: 450, // Make width and height equal for a perfect circle
      speed: 25, 
      color: 'from-purple-600 to-purple-700', 
      pathColor: 'rgba(160, 100, 255, 0.3)',
      rotation: '' // Remove 3D rotation for a flat circle
    }
  ];

  const assignIndustries = (orbitsToAssign: Orbit[]): Orbit[] => {
    // First orbit: AI, Cloud Migration, Networking, Real Estate
    const firstOrbitItems = [
      industries[0], // AI
      industries[1], // Cloud Migration
      industries[2], // Networking
      industries[6], // Real Estate
    ];
    // Second orbit: Edtech, Cyber Security, Digital Marketing
    const secondOrbitItems = [
      industries[3], // Edtech
      industries[4], // Cyber Security
      industries[5], // Digital Marketing
    ];
    return orbitsToAssign.map((orbit, orbitIdx) => {
      const newOrbit = { ...orbit };
      if (orbitIdx === 0) {
        newOrbit.items = firstOrbitItems;
      } else if (orbitIdx === 1) {
        newOrbit.items = secondOrbitItems;
      } else {
        newOrbit.items = [];
      }
      return newOrbit;
    });
  };

  const allOrbits = assignIndustries(orbits);

  const getOrbitPosition = (orbitIndex: number, progress: number) => {
    const orbit = allOrbits[orbitIndex];
    const angle = progress * Math.PI * 2;
    const x = Math.cos(angle) * (orbit.width / 2);
    const y = Math.sin(angle) * (orbit.height / 2);
    return { x, y };
  };

  const startAnimation = () => {
    progressRef.current = new Array(allOrbits.length).fill(0);
    previousTimeRef.current = undefined;
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const animate = (time: number) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time;
    }

    const deltaTime = time - previousTimeRef.current;
    previousTimeRef.current = time;

    allOrbits.forEach((orbit, orbitIndex) => {
      progressRef.current[orbitIndex] = (progressRef.current[orbitIndex] + (deltaTime / (orbit.speed * 1000))) % 1;
      
      const orbitElement = containerRef.current?.querySelector(`.orbit-${orbitIndex}`);
      const items = orbitElement?.querySelectorAll('.orbit-item');

      items?.forEach((item, itemIndex) => {
        const itemProgress = (progressRef.current[orbitIndex] + (itemIndex / (items.length || 1))) % 1;
        const pos = getOrbitPosition(orbitIndex, itemProgress);
        (item as HTMLElement).style.transform = `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%)`;
      });
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    } else {
      stopAnimation();
    }
    return stopAnimation;
  }, [isVisible]);

  return (
    <section 
      className="py-16 bg-[#000000] relative overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Binary Pattern Background */}
      <div className="absolute inset-0 z-0 p-16 pointer-events-none overflow-hidden">
        <BinaryPattern 
          mouseX={mouseX} 
          mouseY={mouseY} 
          randomString={randomBinary} 
        />
      </div>

      {/* Floating dots background */}
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-semibold leading-snug text-slate-100">
            Domain Expertise
          </h1>
          <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            Our solutions orbit around your core business needs
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative h-[800px] flex items-center justify-center perspective-1000"
        >
          {/* Central 3D Planet */}
          <div className={`
            absolute z-10 w-56 h-56 flex items-center justify-center
            transition-all duration-1000 ${isVisible ? 'opacity-80 scale-100' : 'opacity-0 scale-50'}
          `}>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-200 via-white to-gray-400 shadow-2xl flex items-center justify-center border-4 border-gray-300">
              <img 
                src={logo_check}
                alt="Center Logo"
                width={150}
                height={150}
                // style={{ borderRadius: '50%' }}
              />
            </div>
          </div>

          {/* Orbit Paths with Moving Icons */}
          {allOrbits.map((orbit, orbitIndex) => (
            <div
              key={orbitIndex}
              className={`orbit-${orbitIndex} absolute border rounded-full border-[#4961e1] transition-opacity duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                width: `${orbit.width}px`,
                height: `${orbit.height}px`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%)`, // Remove rotation for perfect circle
              }}
            >
              
              {orbit.items?.map((item, itemIndex) => {
                const itemProgress = (progressRef.current[orbitIndex] + (itemIndex / orbit.items.length)) % 1;
                const pos = getOrbitPosition(orbitIndex, itemProgress);
                // Alternate sizes for demo; you can customize as needed
                const sphereSizes = [
                  { width: 130, height: 130 },
                  { width: 105, height: 105 },
                  { width: 90, height: 90 },
                  { width: 105, height: 105 }, // For the 4th sphere (Real Estate)
                ];
                const { width, height } = sphereSizes[itemIndex % sphereSizes.length];
                return (
                  <div
                    key={itemIndex}
                    className="orbit-item absolute top-1/2 left-1/2 flex items-center justify-center z-20"
                    style={{
                      width,
                      height,
                      transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%)`,
                    }}
                  >
                    <Mini3DSphere icon={item.icon} label={item.label} width={width} height={height} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

// Binary Pattern Component
const BinaryPattern = ({ mouseX, mouseY, randomString }: any) => {
  let maskImage = useMotionTemplate`radial-gradient(120px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <>
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] opacity-50"></div>
      
      {/* Base visible binary pattern */}
      <div className="absolute inset-0 opacity-30">
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-blue-900 font-mono font-bold">
          {randomString.split('').join(' ')}
        </p>
      </div>
      
      {/* Hover focus effect - only the small area becomes brighter */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition duration-300"
        style={style}
      />
      
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-60 mix-blend-overlay transition duration-300"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold">
          {randomString.split('').join(' ')}
        </p>
      </motion.div>
    </>
  );
};

export default AllIndustries;