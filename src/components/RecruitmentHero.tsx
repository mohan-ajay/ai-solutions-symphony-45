
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const RecruitmentHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-12 h-full w-full">
          {Array.from({ length: 240 }).map((_, i) => (
            <div
              key={i}
              className="border border-blue-400/20 animate-pulse"
              style={{
                animationDelay: `${(i * 0.05) % 4}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating AI particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              AI-Powered Recruitment Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hire Smarter with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                AI Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Transform your hiring process with AI-powered interviews, bias-free screening, 
              and automated candidate scoring. Reduce time-to-hire by 70%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">70%</div>
                <div className="text-slate-400 text-sm">Faster Hiring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">90%</div>
                <div className="text-slate-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-slate-400 text-sm">Companies Trust Us</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl border border-blue-400/30 backdrop-blur-sm overflow-hidden">
              {/* AI Interview simulation */}
              <div className="absolute inset-4">
                <div className="bg-slate-800/50 rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-slate-400 text-sm">AI Interview in Progress</span>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="bg-blue-600/30 rounded-lg p-3">
                      <p className="text-blue-200 text-sm">AI: "Tell me about your experience with JavaScript frameworks..."</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 ml-8">
                      <p className="text-slate-300 text-sm">Candidate: "I have 5 years of experience with React..."</p>
                    </div>
                    <div className="bg-blue-600/30 rounded-lg p-3">
                      <p className="text-blue-200 text-sm">AI: "Can you explain the difference between props and state?"</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Confidence Score:</span>
                      <span className="text-green-400 font-semibold">92%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating metrics */}
              <div className="absolute -top-4 -right-4 bg-green-600/20 border border-green-400/30 rounded-xl p-3 backdrop-blur-sm">
                <div className="text-green-300 text-xs font-semibold">Skills Match: 94%</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-purple-600/20 border border-purple-400/30 rounded-xl p-3 backdrop-blur-sm">
                <div className="text-purple-300 text-xs font-semibold">Cultural Fit: 87%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentHero;
