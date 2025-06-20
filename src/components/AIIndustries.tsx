
import React, {useEffect,useState,useRef} from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building, Heart, ShoppingCart, Factory, GraduationCap, Car, Banknote, Plane } from "lucide-react";
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
const AIIndustries = () => {
  // const industries = [
  //   {
  //     icon: Heart,
  //     name: "Healthcare",
  //     description: "AI-driven diagnostics, patient care optimization, and medical research acceleration.",
  //     useCases: ["Medical Imaging AI", "Drug Discovery", "Patient Monitoring", "Predictive Healthcare"]
  //   },
  //   {
  //     icon: Banknote,
  //     name: "Finance",
  //     description: "Intelligent fraud detection, algorithmic trading, and risk assessment solutions.",
  //     useCases: ["Fraud Detection", "Risk Analysis", "Algorithmic Trading", "Credit Scoring"]
  //   },
  //   {
  //     icon: ShoppingCart,
  //     name: "Retail & E-commerce",
  //     description: "Personalized shopping experiences, inventory optimization, and demand forecasting.",
  //     useCases: ["Recommendation Engines", "Inventory Management", "Price Optimization", "Customer Analytics"]
  //   },
  //   {
  //     icon: Factory,
  //     name: "Manufacturing",
  //     description: "Predictive maintenance, quality control, and supply chain optimization.",
  //     useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain AI", "Production Optimization"]
  //   },
  //   {
  //     icon: GraduationCap,
  //     name: "Education",
  //     description: "Personalized learning platforms, automated grading, and educational analytics.",
  //     useCases: ["Adaptive Learning", "Student Analytics", "Automated Assessment", "Content Personalization"]
  //   },
  //   {
  //     icon: Car,
  //     name: "Transportation",
  //     description: "Autonomous systems, route optimization, and smart logistics solutions.",
  //     useCases: ["Route Optimization", "Fleet Management", "Autonomous Vehicles", "Traffic Analysis"]
  //   },
  //   {
  //     icon: Building,
  //     name: "Real Estate",
  //     description: "Property valuation, market analysis, and smart building management.",
  //     useCases: ["Property Valuation", "Market Prediction", "Smart Buildings", "Investment Analysis"]
  //   },
  //   {
  //     icon: Plane,
  //     name: "Aviation",
  //     description: "Flight optimization, maintenance prediction, and passenger experience enhancement.",
  //     useCases: ["Flight Optimization", "Maintenance AI", "Passenger Analytics", "Safety Systems"]
  //   }
  // ];

   const orbitRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const orbitRadius = 230;
  
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
    <section className="py-20 bg-[#d3d3d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industries We're Transforming with AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI solutions are revolutionizing operations across diverse industries, delivering measurable results and competitive advantages.
          </p>
        </div>
          <div
                ref={orbitRef}
                className={`relative w-[100px] h-[500px] m-auto flex justify-start items-start transition-all duration-[2000ms] ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
              >
                <div className="
  absolute top-1/2 left-1/2 w-[310px] h-[310px] 
  bg-[#4169e1]/60
  border-2 border-white rounded-full 
  transform -translate-x-1/2 -translate-y-1/2
  transition-all duration-[2000ms] ease-in-out
"></div>
<div className="
  absolute top-1/2 left-1/2 w-[460px] h-[460px] 
  bg-[#4169e1]/70
  border-4 border-white rounded-full 
  transform -translate-x-1/2 -translate-y-1/2
  transition-all duration-[2000ms] ease-in-out
  shadow-[0_0_15px_rgba(255,255,255,0.5)]
"></div>          
<div className={`
  absolute top-1/2 left-1/2 w-[170px] h-[170px] 
  bg-[#4169e1]/90
  rounded-full transform -translate-x-1/2 -translate-y-1/2 
  flex justify-center items-center text-black font-bold text-[60px] z-20 
  shadow-[0_0_20px_rgba(65,105,225,0.9)]
  transition-all duration-[2000ms] ease-in-out 
  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
`}>
  M
</div>          
                <div className="absolute top-1/2 left-1/2 w-[410px] h-[410px] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-full h-full animate-[spin_40s_linear_infinite]">
                    {industries.map((item, index) => {
                      const angle = (index / industries.length) * 2 * Math.PI;
                      const x = orbitRadius * Math.cos(angle);
                      const y = orbitRadius * Math.sin(angle);
          
                      return (
                        <div
                          key={index}
                          className={`absolute w-[80px] h-[80px] bg-[#4169e1] rounded-full flex flex-col items-center justify-center text-center text-[#0c1323] text-sm font-semibold shadow-md z-10 transition-all duration-[2000ms] ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                          style={{
                            left: `calc(50% + ${x}px - 40px)`,
                            top: `calc(50% + ${y}px - 40px)`,
                            transitionDelay: `${400 + index * 150}ms`
                          }}
                        >
                          <div className="animate-[spinReverse_40s_linear_infinite] w-full h-full flex flex-col items-center justify-center text-white">
                            <FontAwesomeIcon icon={item.icon} />
                            <div className="mt-1 text-xs text-white">{item.label}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
      </div>
    </section>
  );
};

export default AIIndustries;
