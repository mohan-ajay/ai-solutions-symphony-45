"use client";

import React, { type SVGProps } from "react";
import { GradientHeading } from "./Gradient-heading";
import { LogoCarousel } from "./logo-carousel";
import shopprop_logo from '/logos/shopprop_logo.png'
import richs_logo from '/logos/rich_logo.webp'
import bean_info from '/logos/bean-logo.png'
import intview_logo from '/logos/intview_io.png'
import hireko from '/logos/Hireko-logo.png'
import nets_turf from '/logos/nets_and-turf_logo.png'
import stordis from '/logos/stordis.png';
import walsgreen from '/logos/walsgreen.png'
import intracrew from '/logos/intracrew-logo.png'
import fracsials from '/logos/fracsials.png'

const allLogos = [
  { name: "Shopprop", id: 1, img: shopprop_logo },
  { name: "RichsUpholstery", id: 2, img: richs_logo },
  { name: "Hireko", id: 3, img: hireko },
  { name: 'intview', id: 4, img: intview_logo},
  { name: 'beanInfo', id: 5, img: bean_info },
  { name: 'nets_turf', id: 6, img: nets_turf },
  { name: 'intracrew', id: 7, img: intracrew },
  { name: 'stordis', id: 8, img: stordis },
  { name: 'walsgreen', id: 9, img: walsgreen },
  {name:'fracsials', id: 10, img: fracsials}
] 

export function LogoCarouselDemo() {
  return (
    <div className="space-y-6 sm:space-y-8 py-12 sm:py-16 bg-[#d3d3d3] min-h-[400px] sm:min-h-[500px]">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8 sm:space-y-15 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-slate-800 text-center">
          Our Partners
        </h1>
        <LogoCarousel columnCount={5} logos={allLogos} />
      </div>
    </div>
  );
}
