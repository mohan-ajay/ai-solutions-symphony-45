
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap } from "lucide-react";
import MetricDustVisualizer from '../MetricDustVisualizer/MetricDustVisualizer';

const MetricdustHero = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const binaryDotsRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const hoverActiveRef = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Settings
    const text = "METRICDUST";
    let fontSize = 170; // Initial font size
    const spacing = 6;
    const binaryDots = binaryDotsRef.current;

    const calculateCanvasSize = () => {
      const container = containerRef.current;
      if (!container) return { width: window.innerWidth, height: 100 };
      
      const containerWidth = container.clientWidth;
      const containerHeight = 150; // Base height, will adjust
      return { width: containerWidth, height: containerHeight };
    };

    const resizeCanvas = () => {
      const { width, height } = calculateCanvasSize();
      canvas.width = width;
      canvas.height = height;
      
      // Adjust font size to fit width while maintaining aspect ratio
      ctx.font = `bold ${fontSize}px monospace`;
      let textWidth = ctx.measureText(text).width;
      
      while (textWidth > canvas.width * 0.9 && fontSize > 50) {
        fontSize -= 2;
        ctx.font = `bold ${fontSize}px monospace`;
        textWidth = ctx.measureText(text).width;
      }
      
      initializeParticles();
    };

    const initializeParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.fillStyle = "##F5F5DC";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Center text with safe margins
      const textWidth = ctx.measureText(text).width;
      const xPos = Math.max(canvas.width / 2, textWidth / 2 + 20);
      const yPos = canvas.height / 2;
      
      ctx.fillText(text, xPos, yPos);

      const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      binaryDots.length = 0;

      for (let y = 0; y < textData.height; y += spacing) {
        for (let x = 0; x < textData.width; x += spacing) {
          const index = (y * textData.width + x) * 4;
          const alpha = textData.data[index + 3];
          if (alpha > 128) {
            binaryDots.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              baseX: x,
              baseY: y,
              char: Math.random() > 0.5 ? "1" : "0",
              vx: 0,
              vy: 0,
              returnSpeed: 0.03 + Math.random() * 0.02,
              isReturning: false
            });
          }
        }
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#F5F5DC";
      ctx.font = `${Math.max(12, fontSize / 10)}px monospace`; // Scale binary character size

      const mouse = mouseRef.current;
      const binaryDots = binaryDotsRef.current;
      const hoverActive = hoverActiveRef.current;

      for (let i = 0; i < binaryDots.length; i++) {
        const p = binaryDots[i];

        if (hoverActive && mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 120;
          
          if (dist < pushRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (pushRadius - dist) / pushRadius * 3;
            p.vx = Math.cos(angle) * force;
            p.vy = Math.sin(angle) * force;
            p.isReturning = false;
          } else if (!p.isReturning) {
            p.isReturning = true;
          }
        } else {
          p.isReturning = true;
        }

        if (p.isReturning) {
          const dx = p.baseX - p.x;
          const dy = p.baseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist > 1) {
            p.vx = dx * p.returnSpeed;
            p.vy = dy * p.returnSpeed;
          } else {
            p.vx = 0;
            p.vy = 0;
            p.x = p.baseX;
            p.y = p.baseY;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillText(p.char, p.x, p.y);
      }

      animationRef.current = requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
      hoverActiveRef.current = true;
    };

    const handleMouseLeave = () => {
      hoverActiveRef.current = false;
    };

    resizeCanvas();
    animationRef.current = requestAnimationFrame(animateParticles);

    const resizeObserver = new ResizeObserver(resizeCanvas);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mouseenter', () => hoverActiveRef.current = true);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mouseenter', () => hoverActiveRef.current = true);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-[rgba(0,0,0,0.8)] to-black flex flex-col items-center justify-start overflow-hidden pt-20 pb-16">
      {/* Background elements */}
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

      {/* Container with proper spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main layout with METRICDUST + AI-Powered Future in one column, visualizer in another */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Left column - METRICDUST name and AI-Powered Future text */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-6">
            {/* METRICDUST Logo/Name */}
            <div className="relative w-full h-[200px] flex items-center justify-center lg:justify-start" ref={containerRef}>
              <canvas
                ref={canvasRef}
                className="w-full h-full"
              />
            </div>
            
            {/* AI-Powered Future text directly below */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F5DC] leading-tight">
                AI-Powered Future
              </h1>
            </div>
          </div>
          
          {/* Right column - Visualizer */}
          <div className="relative w-full lg:w-1/2 h-[400px] flex items-center justify-center">
            <MetricDustVisualizer 
              micEnabled={false}
              width="100%"
              height="100%"
              particleColor="#F5F5DC"
            />
          </div>
        </div>

        {/* Secondary content below */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left column - Description and CTA */}
          <div className="text-left space-y-6">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-[#F5F5DC]/90 leading-relaxed max-w-2xl">
                Transform your business with cutting-edge artificial intelligence solutions. 
                We deliver enterprise-grade AI that drives innovation, efficiency, and growth.
              </p>
            </div>
            
            {/* CTA Button with reduced spacing */}
            <div className="pt-2 pb-6">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore AI Solutions
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
            
            {/* Stats section with reduced spacing */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-slate-400 text-sm sm:text-base">AI Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-slate-400 text-sm sm:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-slate-400 text-sm sm:text-base">AI System Monitoring</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Empty space for visual balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default MetricdustHero;
