import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/ui/button";
import { ArrowRight, Brain, Zap, Play } from "lucide-react";
import MetricDustVisualizer from "../MetricDustVisualizer/MetricDustVisualizer";
import LivekitAgent from "./LiveKitAgent";

const MetricdustHero = ({ onModalStateChange }: { onModalStateChange?: (isOpen: boolean) => void }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const binaryDotsRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const hoverActiveRef = useRef(false);
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Stats animation
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [years, setYears] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (statsInView) {
      let p = 0,
        c = 0,
        s = 0,
        y = 0;
      const interval = setInterval(() => {
        let changed = false;
        if (p < 15) {
          p++;
          setProjects(p);
          changed = true;
        }
        if (c < 10) {
          c++;
          setClients(c);
          changed = true;
        }
        if (s < 99) {
          s += 3;
          if (s > 99) s = 99;
          setSatisfaction(s);
          changed = true;
        }
        if (y < 3) {
          y++;
          setYears(y);
          changed = true;
        }
        if (!changed) clearInterval(interval);
      }, 70);
      return () => clearInterval(interval);
    }
  }, [statsInView]);

  const handleStartSession = () => {
    console.log("Starting session...");
    setIsSessionActive(true);
  };

  const handleEndSession = () => {
    console.log("Ending session...");
    setIsSessionActive(false);
  };

  const handleSessionStateChange = (isActive: boolean) => {
    setIsSessionActive(isActive);
  };

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Settings
    const text = "METRICDUST";
    let fontSize = 200; // Initial font size
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
              isReturning: false,
            });
          }
        }
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FFFFFF";
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
            const force = ((pushRadius - dist) / pushRadius) * 3;
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
        y: e.clientY - rect.top,
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

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener(
      "mouseenter",
      () => (hoverActiveRef.current = true)
    );

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener(
        "mouseenter",
        () => (hoverActiveRef.current = true)
      );
    };
  }, []);

  // Notify parent when modal state changes
  useEffect(() => {
    if (onModalStateChange) {
      onModalStateChange(showModal);
    }
  }, [showModal, onModalStateChange]);

  return (
    <section id="" className="relative min-h-screen w-full flex flex-col items-center justify-center">
      {/* Modal Popup for LiveKitAgent - restored */}
       {/* Modal Popup for LiveKitAgent */}
      {showModal && (
        <div className="fixed inset-0 min-h-screen px-4 py-6 sm:py-12 z-[100] flex items-start sm:items-center justify-center bg-black bg-opacity-70">
          <div className="w-[90%] sm:w-5/6 max-w-5xl rounded-xl border border-white/30 shadow-2xl relative backdrop-blur overflow-hidden h-[60vh] sm:h-[00px]">
            <button
              className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-red-600 z-10"
              onClick={() => {
                setIsSessionActive(false);
                setShowModal(false);
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex-1 h-full flex flex-col items-center justify-center p-4 sm:p-6 bg-black">
              <div className="w-full h-full flex items-center justify-center">
                <LivekitAgent
                  isSessionActive={isSessionActive}
                  onSessionStateChange={handleSessionStateChange}
                />
              </div>
              {/* End Session button removed */}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="w-screen bg-black text-white relative overflow-hidden min-h-screen">
        {/* Background with opacity */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url(/earth_horizon.jpg)" }}
        />

        {/* Content container */}
        <div className="relative z-10 h-full container px-4 sm:px-6 lg:px-8 pt-24">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
            {/* Left: Canvas + Text Content */}
            <div className="w-full lg:w-[50%] flex flex-col items-center space-y-8">
              {/* Canvas Container */}
              <div className="w-full flex justify-start" ref={containerRef}>
                <div className="w-full max-w-[600px]">
                  <canvas ref={canvasRef} className="w-full h-[180px] sm:h-[180px] md:h-[180px]" />
                </div>
              </div>
              
              {/* Headings */}
              <div className=" sm:space-y-2 ml-8 w-full max-w-[700px]">
                <h1 className="text-4xl mb-4 sm:text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  Transform Your
                </h1>
                <h1 className="text-4xl sm:text-5xl mb-4 md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  Digital Experience
                </h1>
                <h1 className="text-4xl sm:text-5xl mb-4 md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  with AI
                </h1>
              </div>
            </div>

            {/* Right: Visualizer */}
            <div className="w-full lg:w-[45%] flex flex-col items-center justify-start">
              <div className="w-full relative h-[200px] sm:h-[250px] md:h-[400px] flex items-center justify-center">
                <div className="w-[280px] sm:w-full h-[200px] sm:h-full">
                  <MetricDustVisualizer micEnabled={true} />
                </div>
                {/* Play Button - Centered in Visualizer */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <button
                    onClick={handlePlayAudio}
                    className="text-white font-medium rounded-xl px-1 sm:px-1.5 py-1.5 sm:py-2 border-0 sm:border transition-all flex items-center gap-1.5 sm:gap-2"
                    style={{
                      borderRadius: '10px',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(5px)',
                      WebkitBackdropFilter: 'blur(5px)',
                    }}
                  >
                    {isPlaying ? (
                      <div className="flex items-center justify-center space-x-1">
                        <div className="w-1.5 sm:w-2 h-5 sm:h-4 bg-white rounded-sm"></div>
                        <div className="w-1.5 sm:w-2 h-5 sm:h-4 bg-white rounded-sm"></div>
                      </div>
                    ) : (
                      <Play className="w-4 sm:w-4 h-3 sm:h-4 text-white" fill="white" />
                    )}
                    <span className="font-bold sm:font-bold text-xs sm:text-base">About us</span>
                  </button>
                </div>
              </div>
              {/* Talk To AI Button - Below Visualizer */}
              <button
                onClick={() => {
                  setShowModal(true);
                  handleStartSession();
                }}
                className="text-white font-medium rounded-xl px-4 sm:px-6 py-2 transition-all border flex items-center gap-2 mt-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <span className="text-sm sm:text-base">Talk to AI</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* projects completed */}
         <div className="w-full text-white relative z-10">
        <div className="container py-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-white/10">
            <div
              ref={statsRef}
              className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {/* Stat 1 */}
              <div className="flex flex-col items-start p-4 border-b border-white/20">
                <div className="flex items-end gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {projects}
                  </span>
                  <span className="text-xl font-bold text-white drop-shadow-lg">+</span>
                </div>
                <span className="mt-2 text-base md:text-xl font-semibold text-white drop-shadow-lg">
                  Projects Completed
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-start p-4 border-b border-white/20">
                <div className="flex items-end gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {clients}
                  </span>
                  <span className="text-xl font-bold text-white drop-shadow-lg">+</span>
                </div>
                <span className="mt-2 text-base md:text-xl font-semibold text-white drop-shadow-lg">
                  Global Clients
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-start p-4 border-b border-white/20">
                <div className="flex items-end gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {satisfaction}
                  </span>
                  <span className="text-xl font-bold text-white drop-shadow-lg">%</span>
                </div>
                <span className="mt-2 text-base md:text-xl font-semibold text-white drop-shadow-lg">
                  Customer Satisfaction
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-start p-4 border-b border-white/20">
                <div className="flex items-end gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {years}
                  </span>
                  <span className="text-xl font-bold text-white drop-shadow-lg">+</span>
                </div>
                <span className="mt-2 text-base md:text-xl font-semibold text-white drop-shadow-lg">
                  Years of Experience
                </span>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>

      {/* Stats Grid in separate div below hero */}
     

      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/agent-intro.mp3"
        onEnded={() => setIsPlaying(false)}
      />
    </section>

  );
};

export default MetricdustHero;