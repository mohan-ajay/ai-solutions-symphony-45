import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/ui/button";
import { ArrowRight, Brain, Zap, Play } from "lucide-react";
import MetricDustVisualizer from "../MetricDustVisualizer/MetricDustVisualizer";
import LivekitAgent from "./LiveKitAgent";

const MetricdustHero = () => {
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

  const handleStartSession = () => {
    console.log('Starting session...');
    setIsSessionActive(true);
  };

  const handleEndSession = () => {
    console.log('Ending session...');
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

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Modal Popup for LiveKitAgent */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-5/6 max-w-5xl rounded-xl border border-white/30 shadow-2xl p-0 relative backdrop-blur flex flex-col md:flex-row overflow-hidden min-h-[600px] max-h-[85vh]">
            <button
              className="absolute top-3 right-4 text-black text-3xl font-bold hover:text-red-600 z-10"
              onClick={() => setShowModal(false)}
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
              <div className="mt-8 flex gap-6 justify-center w-full">
                {/* <Button
                  size="lg"
                  disabled={isSessionActive}
                  className="bg-gradient-to-r f rom-[#4961e1] to-[#22232a] mb-8 hover:from-[#4961e1] hover:to-[#000000] text-white text-lg font-semibold border-0 shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleStartSession}
                >
                  {isSessionActive ? 'Session Active' : 'Start Session'}
                </Button> */}
                <Button
                  size="lg"
                  // disabled={!isSessionActive}
                  className="bg-gradient-to-r from-red-500 to-[#22232a] hover:from-red-500 hover:to-[#000000] text-white text-lg font-semibold border-0 shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleEndSession}
                >
                  End Session
                </Button>
              </div>
            </div>
            <div className="w-full md:w-[350px] bg-[#d3d3d3] border-l border-white/30 p-6 flex flex-col min-h-[400px] max-h-[600px] overflow-y-auto">
              {/* Live Transcript Placeholder */}
              <h2 className="text-lg font-semibold mb-2 text-black">Live Transcript</h2>
              <div className="text-gray-300 text-sm opacity-80">
                {/* Replace this with your transcript component */}
                <p>Transcript will appear here...</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Floating Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#4961e1] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-8 pt-16">
        {/* Left: METRICDUST + text */}
        <div className="flex-1 flex flex-col items-start">
          <div className="w-full max-w-xl" ref={containerRef}>
            <canvas ref={canvasRef} className="w-full h-[260px]" />
          </div>
          <h1 className="mt-6 text-[22px] ml-8 md:text-[26px] font-light leading-snug">
            <span className="text-white text-[1.4rem] mr-2">Build</span>
            <span className="text-blue-700 font-extrabold text-[2.8rem] md:text-[3.2rem]">
              A
            </span>
            <span className="text-white font-bold text-[1.7rem] md:text-[2.1rem]">
              long{" "}
            </span>
            <span className="text-blue-700 font-extrabold text-[2.8rem] md:text-[3.2rem]">
              I
            </span>
            <span className="text-white font-bold text-[1.7rem] md:text-[2.1rem]">
              ntelligence
            </span>
          </h1>

          <p className="text-2xl text-white mt-4 ml-8 max-w-xl">
            We help you build AI-first, customer-centric systems that are ready
            to scale and future-proof.
          </p>
        </div>
        {/* Right: Globe Visualizer */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xl h-[550px] relative">
          {/* MetricDustVisualizer */}
          <MetricDustVisualizer micEnabled={false}/>
          
          {/* Play Icon Overlay - Inside the 1's and 0's */}
          <div className="absolute inset-0 flex items-center mb-24 justify-center pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-4">
              <Button
                onClick={handlePlayAudio}
                size="lg"
                className={`flex items-center gap-3 bg-gradient-to-r from-[#4961e1] to-[#22232a] hover:from-[#4961e1] hover:to-[#000000] text-white px-5 py-4 text-lg font-semibold border-0 shadow-md transition-all duration-200 ${isPlaying ? 'ring-2 ring-white/60' : ''}`}
                aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
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
                <span className="font-league-spartan font-bold select-none">About us</span>
              </Button>
            </div>
          </div>
          
          {/* Audio element for background music */}
          <audio ref={audioRef} src="/agent-intro.mp3" onEnded={() => setIsPlaying(false)} />
          
          {/* Talk To AI Button - Now below the visualizer */}
          <Button
            size="lg"
            className="mt-6 bg-gradient-to-r from-[#4961e1] to-[#22232a] hover:from-[#4961e1] hover:to-[#000000] text-white px-8 py-4 mb-8 text-lg font-semibold border-0 shadow-md transition-all duration-200"
            onClick={() => { setShowModal(true); handleStartSession(); }}
          >
            Talk To AI <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MetricdustHero;

