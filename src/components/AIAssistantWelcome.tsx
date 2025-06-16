
import React from 'react';
import { Brain, Database, Users, Zap, Eye, Network, Cpu, Settings } from 'lucide-react';

const AIAssistantWelcome = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden bg-gradient-to-b from-slate-900/20 to-transparent rounded-2xl">
      {/* City Skyline Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex items-end justify-center space-x-1 h-32">
            <div className="w-8 h-16 bg-slate-600 rounded-t"></div>
            <div className="w-6 h-20 bg-slate-700 rounded-t"></div>
            <div className="w-10 h-24 bg-slate-600 rounded-t"></div>
            <div className="w-12 h-28 bg-slate-500 rounded-t"></div>
            <div className="w-8 h-18 bg-slate-700 rounded-t"></div>
            <div className="w-14 h-32 bg-slate-600 rounded-t"></div>
            <div className="w-6 h-22 bg-slate-700 rounded-t"></div>
            <div className="w-10 h-26 bg-slate-600 rounded-t"></div>
          </div>
        </div>
      </div>

      {/* Hologram AI Assistant */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main hologram figure */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400/30 to-indigo-500/30 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center animate-pulse">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500/40 to-indigo-600/40 flex items-center justify-center">
              <Brain className="w-12 h-12 text-blue-300 animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Hologram scan lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="h-full w-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>
          </div>

          {/* Data flow lines */}
          <div className="absolute inset-0">
            {/* Animated data streams */}
            <div className="absolute top-4 -left-8 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[flow_3s_ease-in-out_infinite]"></div>
            <div className="absolute top-8 -right-8 w-16 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-[flow_3s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute bottom-6 -left-10 w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-[flow_3s_ease-in-out_infinite_1s]"></div>
            <div className="absolute bottom-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[flow_3s_ease-in-out_infinite_1.5s]"></div>
          </div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {/* Facial Recognition */}
        <div className="absolute top-12 left-16 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center">
            <Eye className="w-5 h-5 text-blue-300" />
          </div>
        </div>

        {/* Database */}
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 flex items-center justify-center">
            <Database className="w-5 h-5 text-indigo-300" />
          </div>
        </div>

        {/* Network */}
        <div className="absolute bottom-24 left-12 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center">
            <Network className="w-5 h-5 text-purple-300" />
          </div>
        </div>

        {/* CPU */}
        <div className="absolute bottom-16 right-16 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-cyan-300" />
          </div>
        </div>

        {/* Users */}
        <div className="absolute top-32 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 rounded-lg bg-green-500/20 backdrop-blur-sm border border-green-400/30 flex items-center justify-center">
            <Users className="w-4 h-4 text-green-300" />
          </div>
        </div>

        {/* Settings */}
        <div className="absolute bottom-32 right-1/3 animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 flex items-center justify-center">
            <Settings className="w-4 h-4 text-orange-300" />
          </div>
        </div>

        {/* Zap */}
        <div className="absolute top-40 right-1/4 animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-6 h-6 rounded-lg bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center">
            <Zap className="w-3 h-3 text-yellow-300" />
          </div>
        </div>
      </div>

      {/* Connecting lines between icons */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(96 165 250)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.5">
          <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="80%" y1="35%" x2="50%" y2="50%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.5">
          <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="4s" repeatCount="indefinite" begin="1s" />
        </line>
        <line x1="15%" y1="70%" x2="50%" y2="50%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.5">
          <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="4s" repeatCount="indefinite" begin="2s" />
        </line>
      </svg>

      {/* Welcome Text Overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="text-center">
          <p className="text-sm text-blue-300 font-medium animate-pulse">AI Assistant Initializing...</p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantWelcome;
