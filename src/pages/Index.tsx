import ModernHeader from "@/components/ModernHeader";
import MetricdustHero from "@/components/MetricdustHero";
import AIPoweredServices from "@/components/AIPoweredServices";
import AIIndustries from "@/components/AIIndustries";
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo";
import { CardHoverEffectDemo } from "@/components/CardHover";
import ModernFooter from "@/components/ModernFooter";
import TechStackMarquee from "@/components/TechStackMarquee";
import React, { useRef, useEffect, useState } from 'react';


const Index = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-screen overflow-x-hidden">
      <ModernHeader isModalOpen={isModalOpen} />
      <div className="relative h-screen min-h-[600px] md:h-[100vh] flex items-center justify-center">
  <div className="absolute inset-0 bg-black bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(/NSlider2.webp)' }} />
  <div className="relative z-10 w-100 ">
    <MetricdustHero onModalStateChange={setIsModalOpen} />
  </div>
</div>
      <AIPoweredServices />
      <AIIndustries />
      <LogoCarouselDemo />
      <TechStackMarquee />
      <CardHoverEffectDemo />
      <ModernFooter />
      
    </div>
  );
};

export default Index;
