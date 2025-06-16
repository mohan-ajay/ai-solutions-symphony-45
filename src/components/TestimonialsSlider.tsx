
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Talent",
      company: "TechFlow Solutions",
      companySize: "500+ employees",
      image: "/placeholder.svg",
      rating: 5,
      quote: "We reduced our time-to-hire by 65% and improved candidate quality significantly. The AI interviews are incredibly accurate and save our team hours every week.",
      metrics: { timeReduction: "65%", qualityImprovement: "40%", timeSaved: "20 hrs/week" }
    },
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "StartupLab",
      companySize: "50 employees",
      image: "/placeholder.svg",
      rating: 5,
      quote: "As a startup, we needed to hire fast without compromising quality. This AI platform helped us build an amazing team while staying within budget.",
      metrics: { timeReduction: "70%", costSaving: "45%", hireQuality: "92%" }
    },
    {
      name: "Emily Watson",
      role: "VP of Human Resources",
      company: "Global Dynamics Corp",
      companySize: "5000+ employees",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The bias-free interviews and detailed analytics have transformed our enterprise hiring. We can now make data-driven decisions at scale.",
      metrics: { biasReduction: "80%", scalability: "10x", accuracy: "94%" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-50 text-green-700 border-green-200">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how companies of all sizes are transforming their hiring with our AI platform.
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial card */}
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Left side - Testimonial */}
                <div className="p-12">
                  <Quote className="w-12 h-12 text-blue-600 mb-6" />
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-slate-700 mb-8 leading-relaxed">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt={testimonials[currentSlide].name}
                      className="w-14 h-14 rounded-full mr-4 bg-slate-200"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonials[currentSlide].name}</div>
                      <div className="text-slate-600">{testimonials[currentSlide].role}</div>
                      <div className="text-sm text-slate-500">{testimonials[currentSlide].company}</div>
                    </div>
                  </div>
                </div>

                {/* Right side - Metrics */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2">{testimonials[currentSlide].company}</h3>
                  <p className="text-blue-100 mb-8">{testimonials[currentSlide].companySize}</p>
                  
                  <div className="space-y-6">
                    {Object.entries(testimonials[currentSlide].metrics).map(([key, value], index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-blue-100 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-2xl font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
