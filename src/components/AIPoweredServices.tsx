import React from 'react';
import { Card, CardContent } from "@/ui/card";
import { Brain, Bot, BarChart3, Cog, Database, Shield } from "lucide-react";
import MDlogovideo from '/MicrosoftTeams-video.mp4'
import { useNavigate } from 'react-router-dom';


const AIPoweredServices = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Main Scroll Container */}
      <section className="py-16 bg-[#d3d3d3] overflow-x-hidden">
  <div className="demo-container flex flex-col md:flex-row mt-8">
    
    {/* Left Fixed MD Video – 60% width on desktop, full width on mobile */}
    <div className="w-full lg:w-[60%] lg:sticky lg:top-[100px] h-[250px] sm:h-[300px] lg:h-[calc(100vh-100px)]">
      <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <mask id="md-mask">
            <rect width="100%" height="100%" fill="black" />
            <text
              x="35%"
              y="70%"
              textAnchor="middle"
              fill="white"
              fontSize="700"
              fontFamily="Arial Black"
              fontWeight="900"
            >
              M
            </text>
            <text
              x="65%"
              y="70%"
              textAnchor="middle"
              fill="white"
              fontSize="700"
              fontFamily="Arial Black"
              fontWeight="900"
            >
              D
            </text>
          </mask>
        </defs>
        <foreignObject width="100%" height="100%" mask="url(#md-mask)">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="masked-video h-full w-full object-cover"
          >
            <source src={MDlogovideo} type="video/mp4" />
          </video>
        </foreignObject>
      </svg>
    </div>

    {/* Right Side Content – 40% width on desktop, full on mobile */}
    <div className="w-full lg:w-[50%] flex flex-col justify-start mt-6 sm:mt-10 lg:mt-20 px-4 sm:px-6 space-y-6 sm:space-y-8 lg:space-y-10">
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-snug text-black">
        Build products mounted on our AI-first approach for a future ready solution that's ready to scale
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg font-light text-zinc-400">
        {[
          { icon: "technology.png", label: "Tech Development" },
          { icon: "framework.png", label: "Product Design" },
          { icon: "microchip.png", label: "AI Solutions" },
          { icon: "settings.png", label: "Growth Marketing" },
          { icon: "blockchain.png", label: "Digital Transformation" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2 sm:gap-3">
            <img src={icon} alt={label} className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg lg:text-xl text-black max-w-3xl">{label}</span>
          </div>
        ))}
      </div>

      <button
        className="self-start mt-4 text-sm sm:text-base lg:text-lg underline underline-offset-4 hover:text-gray-800 transition text-black"
        onClick={() => navigate('/services')}
      >
        View all services →
      </button>
    </div>
  </div>
</section>

    </div>
  );
};

export default AIPoweredServices;