import React from 'react';
import { Card, CardContent } from "@/ui/card";
import { Brain, Bot, BarChart3, Cog, Database, Shield } from "lucide-react";
import MDlogovideo from '../../public/MicrosoftTeams-video.mp4'


const AIPoweredServices = () => {
  return (
    <div>
      {/* Main Scroll Container */}
      <section className="py-20 bg-[#d3d3d3]">
        
        <div className="demo-container flex flex-row mt-8">
          {/* Left Fixed MD Video – 60% width */}
          <div className="w-[60%] sticky top-[100px] h-[calc(100vh-100px)]">
            <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="h-[700px] w-full">
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
                  <source
                    src={MDlogovideo}
                    type="video/mp4"
                  />
                </video>
              </foreignObject>
            </svg>
          </div>

          {/* Right Side Content – 40% width */}
          <div className="w-[50%] flex flex-col justify-start mt-20 space-y-10">
            <h1 className="text-4xl font-semibold leading-snug text-black">
            Build products mounted on our AI-first approach for a future ready solution that's ready to scale
            </h1>

            <div className="grid grid-cols-2 gap-6 text-lg font-light text-zinc-400">
              <div className="flex items-center gap-2">
                <img src="technology.png" alt="Tech Development" className="w-6 h-6" />
                <span className="text-xl text-black max-w-3xl">Tech Development</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="framework.png" alt="Product Design" className="w-6 h-6" />
                <span className="text-xl text-black max-w-3xl">Product Design</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="microchip.png" alt="AI Solutions" className="w-6 h-6" />
                <span className="text-xl text-black max-w-3xl">AI Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="settings.png" alt="Growth Marketing" className="w-6 h-6" />
                <span className="text-xl text-black max-w-3xl">Growth Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="blockchain.png" alt="Digital Transformation" className="w-6 h-6" />
                <span className="text-xl text-black max-w-3xl">Digital Transformation</span>
              </div>
            </div>

            <button className="flex justify-start mt-6 ml-10 mr-10 text-lg underline underline-offset-4 hover:text-gray-800 transition text-black">
              View all services →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredServices;