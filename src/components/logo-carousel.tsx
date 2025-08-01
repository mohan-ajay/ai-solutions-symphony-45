"use client"

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Logo {
  name: string;
  id: number;
  img: string;
  width?: number;
  height?: number;
}

interface LogoCarouselProps {
  columnCount?: number;
  logos: Logo[];
}

export function LogoCarousel({ columnCount = 5, logos }: LogoCarouselProps) {
  const [currentColumnCount, setCurrentColumnCount] = useState(columnCount);

  useEffect(() => {
    const handleResize = () => {
      setCurrentColumnCount(window.innerWidth < 640 ? 2 : columnCount);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columnCount]);

  // Split logos into sets of currentColumnCount
  const logoSets: Logo[][] = [];
  for (let i = 0; i < logos.length; i += currentColumnCount) {
    logoSets.push(logos.slice(i, i + currentColumnCount));
  }

  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % logoSets.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [logoSets.length]);

  // If the last set has less than columnCount, fill with empty slots
  const displaySet = logoSets[currentSet] ? [...logoSets[currentSet]] : [];
  while (displaySet.length < columnCount) {
    displaySet.push({ name: "", id: -1, img: "", width: 0, height: 0 });
  }

  return (
    <div className="flex flex-wrap justify-center space-x-6 sm:space-x-8 md:space-x-12 mt-8 sm:mt-12">
      {displaySet.map((logo, index) => (
        <motion.div
          key={logo.id !== -1 ? logo.id : `empty-${index}`}
          className="relative h-30 w-32 sm:h-32 sm:w-40 md:h-44 md:w-36 overflow-hidden flex items-center justify-center m-3 sm:m-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <AnimatePresence mode="wait">
            {logo.img && (
              <motion.img
                key={logo.id}
                src={logo.img}
                alt={logo.name}
                className="object-contain"
                style={{
                  width: logo.width ? `${logo.width}px` : undefined,
                  height: logo.height ? `${logo.height}px` : undefined,
                }}
                initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
                animate={{
                  y: "0%",
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 1,
                    bounce: 0.2,
                    duration: 0.9,
                  },
                }}
                exit={{
                  y: "-20%",
                  opacity: 0,
                  filter: "blur(6px)",
                  transition: {
                    type: "tween",
                    ease: "easeIn",
                    duration: 0.9,
                  },
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
