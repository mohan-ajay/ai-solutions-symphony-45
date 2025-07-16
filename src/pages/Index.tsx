import ModernHeader from "@/components/ModernHeader";
import MetricdustHero from "@/components/MetricdustHero";
import AIPoweredServices from "@/components/AIPoweredServices";
import AIIndustries from "@/components/AIIndustries";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { CardHoverEffectDemo } from "@/components/CardHover";
import ModernFooter from "@/components/ModernFooter";
import TechStackMarquee from "@/components/TechStackMarquee";
import React, { useRef, useEffect } from 'react';


const Index = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <ModernHeader />
      <div >
        <MetricdustHero />
        <AIPoweredServices />
        <AIIndustries />
        <LogoCarouselDemo />
        <TechStackMarquee />
        <CardHoverEffectDemo />
        <ModernFooter />
        <a href="/contact-us" className="text-black underline hover:text-[#d3d3d3] font-league-spartan">Contact Us</a>
      </div>
    </div>
  );
};

export default Index;
