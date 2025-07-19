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
    <section
      id="home"
      className="relative min-h-screen bg-black flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Modal Popup for LiveKitAgent */}
      {showModal && (
        <div className="fixed inset-0 top-0 mt-12 z-[100] flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-5/6 max-w-5xl rounded-xl border border-white/30 shadow-2xl p-0 relative backdrop-blur flex flex-col md:flex-row overflow-hidden h-[500px]">
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
            <div className="flex-1 min-w-0 flex flex-col items-center justify-center p-6 bg-black">
              <div className="w-full flex-1 flex items-center justify-center">
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
      {/* Floating Background Dots */}
      <div className="h-[150vh] w-screen bg-black text-white relative overflow-hidden">
  {/* Background with opacity */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{ backgroundImage: "url(/earth_horizon.jpg)" }}
  />
  
  {/* Content container with relative positioning */}
  <div className="relative z-10 h-full">
    <div className="w-full max-w-7xl mt-32 px-6 ml-8 flex flex-col lg:flex-row items-center justify-between gap-8 pt-32">
      {/* Left: METRICDUST + text */}
      <div className="flex-1 flex flex-col items-start">
        <div className="w-full max-w-xl" ref={containerRef}>
          <canvas ref={canvasRef} className="w-full h-[260px]" />
        </div>
        <h1 className="mt-6 text-[22px] ml-8 mt-16 md:text-[26px] font-light leading-snug">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-8xl md:text-6xl font-bold text-white mb-4">
              Transform Your Digital
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Experience with AI
            </h1>
          </div>
        </h1>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="w-full max-w-4xl mt-24 ml-10 flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-0"
        >
          {/* Stat 1 */}
          <div className="flex-1 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-16">
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-white">
                {projects}
              </span>
              <span className="text-2xl font-bold text-white">+</span>
            </div>
            <span className="mt-2 text-xl font-medium text-white">
              Projects Completed
            </span>
          </div>
          {/* Stat 2 */}
          <div className="flex-1 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:px-8">
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-white">
                {clients}
              </span>
              <span className="text-2xl font-bold text-white">+</span>
            </div>
            <span className="mt-2 text-xl font-medium text-white">
              Global Clients
            </span>
          </div>
          {/* Stat 3 */}
          <div className="flex-1 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:px-16">
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-white">
                {satisfaction}
              </span>
              <span className="text-2xl font-bold text-white">%</span>
            </div>
            <span className="mt-2 text-xl font-medium text-white">
              Customer Satisfaction
            </span>
          </div>
          {/* Stat 4 */}
          <div className="flex-1 flex flex-col items-center md:items-start pb-6 md:pb-0 md:pl-16">
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-white">{years}</span>
              <span className="text-2xl font-bold text-white">+</span>
            </div>
            <span className="mt-2 text-xl font-medium text-white">
              Year of Experiences
            </span>
          </div>
        </div>
      </div>
      {/* Right: Globe Visualizer */}
      <div className="flex-1 flex flex-col items-center justify-top mb-16 w-full max-w-xl h-[600px] relative">
        {/* MetricDustVisualizer */}
        <MetricDustVisualizer micEnabled={false} />

        {/* Play Icon Overlay - Inside the 1's and 0's */}
        <div className="absolute inset-0 flex items-center mb-24 justify-center pointer-events-none">
          <div className="absolute top-1/2 left-1/2 mt-4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-2">
            <Button
              onClick={handlePlayAudio}
              size="lg"
              className="text-white font-medium bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 h-10 me-2 mb-32 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
              type="button"
            >
              {isPlaying ? (
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-6 bg-white rounded-sm"></div>
                  <div className="w-2 h-6 bg-white rounded-sm"></div>
                </div>
              ) : (
                <Play
                  className="w-5 h-8 text-white ml-1 transition-transform duration-300"
                  fill="white"
                />
              )}
              <span className="font-league-spartan font-bold select-none">
                About us
              </span>
            </Button>
          </div>
        </div>

        {/* Audio element for background music */}
        <audio
          ref={audioRef}
          src="/agent-intro.mp3"
          onEnded={() => setIsPlaying(false)}
        />

        {/* Talk To AI Button - Now below the visualizer */}
        
        <button type="button" className="text-white mb-32 font-medium bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => {
            setShowModal(true);
            handleStartSession();
          }}>Talk to AI</button>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default MetricdustHero;
