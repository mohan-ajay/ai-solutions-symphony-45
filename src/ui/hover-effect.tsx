import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Navigate } from 'react-router-dom'
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 sm:py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full transition-transform duration-200 hover:scale-[0.98] active:scale-[0.97] sm:hover:scale-100 sm:active:scale-100"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>

          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  image,
}: {
  className?: string;
  children: React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl sm:rounded-2xl h-full w-full p-3 sm:p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {image && (
        <div className="relative w-full h-40 sm:h-50 overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4">
          <img
            src={image}
            alt="Card image"
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>

    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-base sm:text-lg md:text-xl font-bold tracking-wide mt-2 text-neutral-100", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <p className={cn("mt-2 text-sm sm:text-base text-neutral-300 tracking-wide leading-relaxed", className)}>
    {children}
  </p>
  <a href="/reflects" className="text-blue-800 mt-4 text-center">
    Read More
  </a>
    </div>
  );
};