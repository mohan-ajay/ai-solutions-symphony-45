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
import logo_check from '/logo_black.png';
import IndustriesWeServe from './IndustriesWeServe';

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

// const industries: Industry[] = [
//   { label: 'AI', icon: faHexagonNodes},
//   { label: 'Cloud Migration', icon: faCloud },
//   { label: 'Networking', icon: faNetworkWired },
//   { label: 'Edtech', icon: faGraduationCap },
//   { label: 'Cyber Security', icon: faSignHanging },
//   { label: 'Digital Marketing', icon: faChartLine },
//   { label: 'Real Estate', icon: faBuilding }
// ];

// const Mini3DSphere = ({ icon, label, width = 140, height = 140 }: { icon: any, label: string, width?: number, height?: number }) => {
//   return (
//     <div className="w-full h-full relative" style={{ 
//       width: typeof width === 'number' ? `${width}px` : width,
//       height: typeof height === 'number' ? `${height}px` : height,
//     }}>
//       <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }} style={{ width: '100%', height: '100%', borderRadius: '50%' }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[3, 3, 3]} intensity={1} />
//         <mesh>
//           <sphereGeometry args={[1, 32, 32]} />
//           <meshStandardMaterial 
//             color="#888" 
//             metalness={0.6} 
//             roughness={0.2} 
//             emissive="#d3d3d3"
//             emissiveIntensity={0.1}
//           />
//         </mesh>
//         <OrbitControls 
//           enableZoom={false} 
//           autoRotate={true} 
//           autoRotateSpeed={3}
//           enablePan={false}
//           enableRotate={false}
//         />
//       </Canvas>
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="text-white text-center">
//           <FontAwesomeIcon icon={icon} className="text-base sm:text-lg md:text-xl mb-1" />
//           <p className="text-[10px] sm:text-xs mt-1 px-1">{label}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const AllIndustries = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [randomBinary, setRandomBinary] = useState("");
  const animationRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const progressRef = useRef<number[]>([]);
  
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  // useEffect(() => {
  //   // Generate random binary string
  //   let str = "";
  //   for (let i = 0; i < 15000; i++) {
  //     str += Math.random() > 0.5 ? "1" : "0";
  //   }
  //   setRandomBinary(str);

  //   // Intersection Observer
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) setIsVisible(true);
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (containerRef.current) observer.observe(containerRef.current);
    
  //   return () => {
  //     if (containerRef.current) observer.unobserve(containerRef.current);
  //     stopAnimation();
  //   };
  // }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // const getResponsiveSize = () => {
  //   const width = window.innerWidth;
  //   if (width < 640) { // mobile
  //     return {
  //       outer: 300,
  //       inner: 200
  //     };
  //   } else if (width < 1024) { // tablet
  //     return {
  //       outer: 500,
  //       inner: 320
  //     };
  //   } else { // desktop
  //     return {
  //       outer: 700,
  //       inner: 450
  //     };
  //   }
  // };

  // const [orbitSizes, setOrbitSizes] = useState(getResponsiveSize());

  // useEffect(() => {
  //   const handleResize = () => {
  //     setOrbitSizes(getResponsiveSize());
  //   };
    
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const orbits: Orbit[] = [
  //   { 
  //     width: orbitSizes.outer,
  //     height: orbitSizes.outer,
  //     speed: 20, 
  //     color: 'from-purple-600 to-purple-700', 
  //     pathColor: 'rgba(160, 100, 255, 0.3)',
  //     rotation: ''
  //   },
  //   { 
  //     width: orbitSizes.inner,
  //     height: orbitSizes.inner,
  //     speed: 25, 
  //     color: 'from-purple-600 to-purple-700', 
  //     pathColor: 'rgba(160, 100, 255, 0.3)',
  //     rotation: ''
  //   }
  // ];

  // const assignIndustries = (orbitsToAssign: Orbit[]): Orbit[] => {
  //   // First orbit: AI, Cloud Migration, Networking, Real Estate
  //   const firstOrbitItems = [
  //     industries[0], // AI
  //     industries[1], // Cloud Migration
  //     industries[2], // Networking
  //     industries[6], // Real Estate
  //   ];
  //   // Second orbit: Edtech, Cyber Security, Digital Marketing
  //   const secondOrbitItems = [
  //     industries[3], // Edtech
  //     industries[4], // Cyber Security
  //     industries[5], // Digital Marketing
  //   ];
  //   return orbitsToAssign.map((orbit, orbitIdx) => {
  //     const newOrbit = { ...orbit };
  //     if (orbitIdx === 0) {
  //       newOrbit.items = firstOrbitItems;
  //     } else if (orbitIdx === 1) {
  //       newOrbit.items = secondOrbitItems;
  //     } else {
  //       newOrbit.items = [];
  //     }
  //     return newOrbit;
  //   });
  // };

  // const allOrbits = assignIndustries(orbits);

  // const getOrbitPosition = (orbitIndex: number, progress: number) => {
  //   const orbit = allOrbits[orbitIndex];
  //   const angle = progress * Math.PI * 2;
  //   const x = Math.cos(angle) * (orbit.width / 2);
  //   const y = Math.sin(angle) * (orbit.height / 2);
  //   return { x, y };
  // };

  // const startAnimation = () => {
  //   progressRef.current = new Array(allOrbits.length).fill(0);
  //   previousTimeRef.current = undefined;
  //   animationRef.current = requestAnimationFrame(animate);
  // };

  // const stopAnimation = () => {
  //   if (animationRef.current) {
  //     cancelAnimationFrame(animationRef.current);
  //   }
  // };

  // const animate = (time: number) => {
  //   if (previousTimeRef.current === undefined) {
  //     previousTimeRef.current = time;
  //   }

  //   const deltaTime = time - previousTimeRef.current;
  //   previousTimeRef.current = time;

  //   allOrbits.forEach((orbit, orbitIndex) => {
  //     progressRef.current[orbitIndex] = (progressRef.current[orbitIndex] + (deltaTime / (orbit.speed * 1000))) % 1;
      
  //     const orbitElement = containerRef.current?.querySelector(`.orbit-${orbitIndex}`);
  //     const items = orbitElement?.querySelectorAll('.orbit-item');

  //     items?.forEach((item, itemIndex) => {
  //       const itemProgress = (progressRef.current[orbitIndex] + (itemIndex / (items.length || 1))) % 1;
  //       const pos = getOrbitPosition(orbitIndex, itemProgress);
  //       (item as HTMLElement).style.transform = `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%)`;
  //     });
  //   });

  //   animationRef.current = requestAnimationFrame(animate);
  // };

  // useEffect(() => {
  //   if (isVisible) {
  //     startAnimation();
  //   } else {
  //     stopAnimation();
  //   }
  //   return stopAnimation;
  // }, [isVisible]);

  return (
    <section 
      className="py-8 sm:py-12 md:py-16 bg-[#000000] relative overflow-hidden group"
      className="py-8 sm:py-12 md:py-16 bg-[#000000] relative overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Binary Pattern Background */}
      <div className="absolute inset-0 z-0 p-4 sm:p-8 md:p-16 pointer-events-none overflow-hidden">
        <BinaryPattern 
          mouseX={mouseX} 
          mouseY={mouseY} 
          randomString={randomBinary} 
        />
      </div>

      {/* Floating dots background */}
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-slate-100">
            Domain Expertise
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-3 sm:mt-4 max-w-3xl mx-auto px-4 sm:px-6">
            Our solutions orbit around your core business needs
          </p>
        </div>

        <div className="max-w-[95vw] sm:max-w-none mx-auto">
          <IndustriesWeServe />
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
  const [gradientSize, setGradientSize] = useState('80px');

  useEffect(() => {
    const updateGradientSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setGradientSize('80px');
      } else if (width < 1024) {
        setGradientSize('100px');
      } else {
        setGradientSize('120px');
      }
    };

    updateGradientSize();
    window.addEventListener('resize', updateGradientSize);
    return () => window.removeEventListener('resize', updateGradientSize);
  }, []);

  let maskImage = useMotionTemplate`radial-gradient(${gradientSize} at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <>
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] opacity-50"></div>
      
      {/* Base visible binary pattern */}
      <div className="absolute inset-0 opacity-30">
        <p className="absolute inset-x-0 text-[8px] sm:text-[10px] md:text-xs h-full break-words whitespace-pre-wrap text-blue-900 font-mono font-bold tracking-wider sm:tracking-normal">
          {randomString.split('').join(' ')}
        </p>
      </div>
      
      {/* Hover focus effect - only the small area becomes brighter */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition duration-300 hidden sm:block"
        style={style}
      />
      
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-60 mix-blend-overlay transition duration-300 hidden sm:block"
        style={style}
      >
        <p className="absolute inset-x-0 text-[8px] sm:text-[10px] md:text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold tracking-wider sm:tracking-normal">
          {randomString.split('').join(' ')}
        </p>
      </motion.div>
    </>
  );
};

export default AllIndustries;