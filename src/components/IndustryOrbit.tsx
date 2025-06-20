import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faStethoscope,
  faGears,
  faHouse,
  faCoins,
  faBookOpenReader,
  faTowerBroadcast,
  faMicrochip,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const industries = [
  { label: 'Advertising', icon: faBullhorn },
  { label: 'Healthcare', icon: faStethoscope },
  { label: 'Manufacturing', icon: faGears },
  { label: 'Real Estate', icon: faHouse },
  { label: 'Finance', icon: faCoins },
  { label: 'Education', icon: faBookOpenReader },
  { label: 'Telecom', icon: faTowerBroadcast },
  { label: 'High-Tech', icon: faMicrochip },
  { label: 'Startups', icon: faRocket }
];

const IndustryOrbit = () => {
  const orbitRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const orbitRadius = 205;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (orbitRef.current) observer.observe(orbitRef.current);
    return () => orbitRef.current && observer.unobserve(orbitRef.current);
  }, []);

  return (
    <div
      ref={orbitRef}
      className={`relative w-[600px] h-[600px] m-auto flex justify-center items-center transition-all duration-[2000ms] ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
    >
      <div className="absolute top-1/2 left-1/2 w-[260px] h-[260px] bg-black/70 border-2 border-[#0c1323] rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-[2000ms] ease-in-out"></div>
      <div className="absolute top-1/2 left-1/2 w-[410px] h-[410px] bg-black/30 border-2 border-[#0c1323] rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-[2000ms] ease-in-out"></div>

      <div className={`absolute top-1/2 left-1/2 w-[120px] h-[120px] bg-gradient-radial from-[#121111] to-[#111111] rounded-full transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white font-bold text-[60px] z-20 shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-[2000ms] ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>M</div>

      <div className="absolute top-1/2 left-1/2 w-[410px] h-[410px] -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full h-full animate-[spin_40s_linear_infinite]">
          {industries.map((item, index) => {
            const angle = (index / industries.length) * 2 * Math.PI;
            const x = orbitRadius * Math.cos(angle);
            const y = orbitRadius * Math.sin(angle);

            return (
              <div
                key={index}
                className={`absolute w-[80px] h-[80px] bg-gradient-radial from-[#474646] to-[#f5f5f5] rounded-full flex flex-col items-center justify-center text-center text-[#0c1323] text-sm font-semibold shadow-md z-10 transition-all duration-[2000ms] ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                  transitionDelay: `${400 + index * 150}ms`
                }}
              >
                <div className="animate-[spinReverse_40s_linear_infinite] w-full h-full flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={item.icon} />
                  <div className="mt-1 text-xs">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustryOrbit; 