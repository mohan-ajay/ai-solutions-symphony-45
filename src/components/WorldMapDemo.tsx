'use client';

import { WorldMap } from "@/ui/world-map";
import { motion } from "framer-motion";

export default function WorldMapDemo({ showLines = true }: { showLines?: boolean }) {
  return (
    <div className="dark:bg-black bg-[#d3d3d3] w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          We are spread across the globe!{" "}
          <span className="text-black">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-black max-w-2xl mx-auto py-4">
          Looking for ways to stay afloat in the AI race? Let's connect to help you build Along Intelligence.
        </p>
      </div>
      {showLines && (
        <WorldMap
          dots={[
            {
              start: {
                lat: 47.6062,
                lng: -122.3321,
                label: "Seattle"
              },
              end: {
                lat: 12.9629, 
                lng: 77.5775,
                label: "Bengaluru"
              },
            },
            {
              start: { 
                lat: 51.1657, 
                lng: 10.4515,
                label: "Germany"
              },
              end: { 
                lat: 12.9629, 
                lng: 77.5775,
                label: "Bengaluru"
              },
            },
            {
              start: { 
                lat: 55.3781, 
                lng: 3.4360,
                label: "UK"
              },
              end: { 
                lat: 12.9629, 
                lng: 77.5775,
                label: "Bengaluru"
              },
            },
            {
              start: { 
                lat: 12.9629, 
                lng: 77.5775,
                label: "Bengaluru"
              },
              end: { 
                lat: 47.6062,
                lng: -122.3321,
                label: "Seattle"
              },
            },
          ]}
        />
      )}
    </div>
  );
}