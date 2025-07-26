import { HoverEffect } from "@/ui/hover-effect"
import metric_talks_1 from '/reflect_metricTalks_2.jpg'
import metric_talks_2 from '/metrictalks_webinar3.jpg';
import metric_talks_3 from '/metrictalks_workshop3.jpg';
import { ArrowRight } from "lucide-react";

export function CardHoverEffectDemo() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-slate-800 text-center sm:text-start ml-4 sm:ml-20 mt-4 sm:mt-6 flex items-center justify-center sm:justify-start">
        Reflect
        <ArrowRight className="ml-1 w-4 sm:w-5 h-4 sm:h-5" />
      </h1>

    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <HoverEffect items={projects} />
      
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "Watch 1st Edition of MetricTalks",
    description:
      "he first edition of MetricTalks by MetricDust successfully concluded on 6th July, 2024. With more than 50-60 participants listening to our esteemed speakers sharing their views and experiences on the AI impact",
    link: "https://stripe.com",
    image: metric_talks_1
  },
  {
    title: "Local AI Assistants",
    description:
      "Mark your calendars because we bring to you the 3rd edition of MetricTalks on Local AI Assistants: Integrating Multi-AI Locally on 8 March, 2025 at 10:00 A.M. IST/ 8:30 PST",
    link: "https://netflix.com",
    image:metric_talks_2
  },
  {
    title: "Watch 3rd Edition of MetricTalks",
    description:
      "MetricDust hosted the third edition of MetricTalks on Local AI Assistants: A workshop on Integrating multi AI Locally. It was succesfully concluded on 8th March, 2025. In case you missed it, you can watch it now",
    link: "https://google.com",
    image: metric_talks_3
  },
];
