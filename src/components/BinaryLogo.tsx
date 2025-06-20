import React, { useRef, useEffect } from 'react';

const BinaryLogoAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const binaryDotsRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const hoverActiveRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Settings
    const text = "METRICDUST";
    const fontSize = 130;
    const spacing = 6;
    const binaryDots = binaryDotsRef.current;

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };

    // Initialize particles in random positions
    const initializeParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.fillStyle = "#4169e1";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      binaryDots.length = 0;

      for (let y = 0; y < textData.height; y += spacing) {
        for (let x = 0; x < textData.width; x += spacing) {
          const index = (y * textData.width + x) * 4;
          const alpha = textData.data[index + 3];
          if (alpha > 128) {
            binaryDots.push({
              x: Math.random() * canvas.width,  // Start random
              y: Math.random() * canvas.height, // Start random
              baseX: x,  // Target position
              baseY: y,  // Target position
              char: Math.random() > 0.5 ? "1" : "0",
              vx: 0,
              vy: 0,
              returnSpeed: 0.03 + Math.random() * 0.02, // Varying return speeds
              isReturning: false
            });
          }
        }
      }
    };

    // Animation loop
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#4169e1";
      ctx.font = "14px monospace";

      const mouse = mouseRef.current;
      const binaryDots = binaryDotsRef.current;
      const hoverActive = hoverActiveRef.current;

      for (let i = 0; i < binaryDots.length; i++) {
        const p = binaryDots[i];

        if (hoverActive && mouse.x !== null && mouse.y !== null) {
          // Hover effect - push particles away
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

        // Return to original position
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

        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Draw the particle
        ctx.fillText(p.char, p.x, p.y);
      }

      animationRef.current = requestAnimationFrame(animateParticles);
    };

    // Event handlers
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
      mouseRef.current = { x: null, y: null };
    };

    // Initial setup
    resizeCanvas();
    animationRef.current = requestAnimationFrame(animateParticles);

    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mouseenter', () => hoverActiveRef.current = true);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mouseenter', () => hoverActiveRef.current = true);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
      />
    </div>
  );
};

export default BinaryLogoAnimation;