'use client';

import { WorldMap } from "@/ui/world-map";
import { motion } from "framer-motion";

export default function WorldMapDemo({ showLines = true }: { showLines?: boolean }) {
  return (
    <div className="dark:bg-black bg-[#000000] w-full">
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="text-white text-3xl font-bold mb-2 text-center">We are spread across the globe!</h2>
        <p className="text-white mb-6 text-xl text-center">Let's connect to help you build Along Intelligence.</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[700px] h-[350px] max-w-full">
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
        </div>
      </div>
    </div>
  );
}