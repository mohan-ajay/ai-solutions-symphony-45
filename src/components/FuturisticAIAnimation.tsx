
import React from 'react';
import { Brain, Cpu, Network, Zap } from 'lucide-react';

const FuturisticAIAnimation = () => {
  return (
    <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-slate-900/5 to-blue-900/10 rounded-3xl border border-blue-100/20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="border border-blue-200/30 animate-pulse"
              style={{
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Neural network nodes */}
      <div className="absolute inset-0">
        {/* Central AI brain hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30 backdrop-blur-sm border border-blue-300/40 flex items-center justify-center animate-pulse">
              <Brain className="w-10 h-10 text-blue-400" />
            </div>
            
            {/* Pulsing rings around central hub */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-0 rounded-full border border-cyan-300/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Floating neural nodes */}
        <div className="absolute top-16 left-16 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-12 h-12 rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-blue-400 animate-pulse"></div>
          </div>
        </div>

        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '0.8s' }}>
          <div className="w-8 h-8 rounded-full bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/50 flex items-center justify-center">
            <Cpu className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        <div className="absolute bottom-20 left-24 animate-float" style={{ animationDelay: '1.2s' }}>
          <div className="w-10 h-10 rounded-full bg-indigo-400/20 backdrop-blur-sm border border-indigo-300/50 flex items-center justify-center">
            <Network className="w-5 h-5 text-indigo-400" />
          </div>
        </div>

        <div className="absolute bottom-24 right-16 animate-float" style={{ animationDelay: '1.6s' }}>
          <div className="w-6 h-6 rounded-full bg-blue-300/30 backdrop-blur-sm border border-blue-200/60 flex items-center justify-center">
            <Zap className="w-3 h-3 text-blue-300" />
          </div>
        </div>

        <div className="absolute top-32 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-4 h-4 rounded-full bg-cyan-300/40 animate-pulse"></div>
        </div>

        <div className="absolute bottom-32 right-1/3 animate-float" style={{ animationDelay: '2.4s' }}>
          <div className="w-3 h-3 rounded-full bg-blue-400/50 animate-pulse"></div>
        </div>
      </div>

      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="neural-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(34 211 238)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Neural network connections */}
        <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="url(#neural-gradient)" strokeWidth="2">
          <animate attributeName="stroke-dasharray" values="0,200;200,0;0,200" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="url(#neural-gradient-2)" strokeWidth="1.5">
          <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="3.5s" repeatCount="indefinite" begin="1s" />
        </line>
        <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="url(#neural-gradient)" strokeWidth="1.5">
          <animate attributeName="stroke-dasharray" values="0,180;180,0;0,180" dur="4.5s" repeatCount="indefinite" begin="2s" />
        </line>
        <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="url(#neural-gradient-2)" strokeWidth="2">
          <animate attributeName="stroke-dasharray" values="0,160;160,0;0,160" dur="3.8s" repeatCount="indefinite" begin="0.5s" />
        </line>
      </svg>

      {/* Floating digital particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Holographic interface overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10">
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse">
              AI-Powered Innovation
            </h3>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg blur-sm"></div>
          </div>
          
          {/* Holographic scan line */}
          <div className="mt-4 relative h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-blue-400/50 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-8 animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Corner circuit patterns */}
      <div className="absolute top-4 right-4 w-16 h-16 opacity-30">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M8 8h48v48H8z" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400" />
          <circle cx="16" cy="16" r="2" fill="currentColor" className="text-blue-400 animate-pulse" />
          <circle cx="48" cy="16" r="2" fill="currentColor" className="text-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="16" cy="48" r="2" fill="currentColor" className="text-indigo-400 animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="48" cy="48" r="2" fill="currentColor" className="text-blue-300 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <path d="M16 16h32M16 16v32M48 16v32M16 48h32" stroke="currentColor" strokeWidth="1" className="text-blue-300/50" />
        </svg>
      </div>

      <div className="absolute bottom-4 left-4 w-12 h-12 opacity-30">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <rect x="4" y="4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-cyan-400 animate-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="36" cy="36" r="1.5" fill="currentColor" className="text-blue-400 animate-pulse" style={{ animationDelay: '2.5s' }} />
          <path d="M12 12L36 36M12 36L36 12" stroke="currentColor" strokeWidth="0.5" className="text-blue-300/40" />
        </svg>
      </div>
    </div>
  );
};

export default FuturisticAIAnimation;
