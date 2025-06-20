import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap } from "lucide-react";

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
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[rgba(0,0,0,0.8)] to-black flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left" ref={containerRef}>
            {/* Canvas container with dynamic sizing */}
            <div className="relative w-full h-[250px] mb-2 overflow-visible">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#F5F5DC] leading-tight pl-8">
              AI-Powered Future
            </h1>
            
            <p className="text-xl text-[#F5F5DC] mb-8 mt-10 leading-relaxed max-w-xl pl-8">
              Transform your business with cutting-edge artificial intelligence solutions. 
              We deliver enterprise-grade AI that drives innovation, efficiency, and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 pl-8">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
                Explore AI Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 text-center pl-8">
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
              <div className="relative w-64 h-64 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full border border-cyan-400/50 backdrop-blur-sm animate-neural-pulse">
                <Brain className="w-32 h-32 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                
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