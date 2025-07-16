"use client";

import React, { type SVGProps } from "react";
import { GradientHeading } from "./Gradient-heading";
import { LogoCarousel } from "./logo-carousel";
import shopprop_logo from '../../public/logos/shopprop_logo.png'
import richs_logo from '../../public/logos/rich_logo.webp'
import bean_info from '../../public/logos/bean-logo.png'
import intview_logo from '../../public/logos/intview_io.png'
import hireko from '../../public/logos/Hireko-logo.png'
import nets_turf from '../../public/logos/nets_and-turf_logo.png'
import stordis from '../../public/logos/stordis-logo.jpg';
import walsgreen from '../../public/logos/walsgreen.jpg'
import intracrew from '../../public/logos/intracrew-logo.png'
import fracsials from '../../public/logos/fracsials.png'

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
    <div className="space-y-8 py-16 bg-[#d3d3d3] min-h-[500px]">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-15">
        <h1 className="text-4xl font-semibold leading-snug text-slate-800">
          Our Partners
        </h1>
        <LogoCarousel columnCount={5} logos={allLogos} />
      </div>
    </div>
  );
}
