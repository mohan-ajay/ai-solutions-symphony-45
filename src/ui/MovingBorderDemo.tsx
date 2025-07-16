"use client";
import React from "react";
import { Button } from "@/ui/moving-border";
import { ArrowRight } from "lucide-react";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.5rem"
        className="bg-gradient-to-r text-lg from-[#4961e1]/60 to-[#F5F5DC]-800 hover:from-[#F5F5DC]-900 hover:to-[#F5F5DC]/10 text-white border-neutral-900 dark:border-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Start Now
        <ArrowRight className="ml-3 w-5 h-5" />
      </Button>
    </div>
  );
}
