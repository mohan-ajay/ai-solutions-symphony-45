
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Brain, Zap } from "lucide-react";

const MetricdustHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated neural network background */}
      <div className="absolute inset-0 opacity-20">
        <div className="neural-network">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating AI particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-600/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm mb-6">
              <Brain className="w-4 h-4 mr-2 animate-pulse" />
              Enterprise AI Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Metricdust
              </span>
              <br />
              AI-Powered Future
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Transform your business with cutting-edge artificial intelligence solutions. 
              We deliver enterprise-grade AI that drives innovation, efficiency, and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
                Explore AI Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                <Play className="mr-2 w-5 h-5" />
                Watch AI Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-slate-400 text-sm">AI Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-slate-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-slate-400 text-sm">AI System Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right visual - AI Brain Animation */}
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central AI Brain */}
              <div className="relative w-64 h-64 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full border border-cyan-400/50 backdrop-blur-sm animate-neural-pulse">
                <Brain className="w-32 h-32 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-500/30 rounded-full border border-cyan-400 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-cyan-300" />
                  </div>
                </div>
                
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 bg-blue-500/30 rounded-full border border-blue-400"></div>
                </div>
                
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                  <div className="absolute -bottom-4 left-1/4 w-6 h-6 bg-purple-500/30 rounded-full border border-purple-400"></div>
                </div>
              </div>
              
              {/* Data flow lines */}
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-flow"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: 'center',
                      top: '50%',
                      left: '50%',
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricdustHero;
