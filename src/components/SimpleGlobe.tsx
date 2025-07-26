import React from 'react';

export function SimpleGlobe() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-black px-20 sm:px-40 pb-20 sm:pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        MetricDust
      </span>
      {/* Simple globe placeholder */}
      <div className="absolute top-16 sm:top-28 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}