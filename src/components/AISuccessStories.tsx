
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, TrendingUp, Users, Clock } from "lucide-react";

const AISuccessStories = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const successStories = [
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Manual patient data analysis taking 8+ hours daily",
      solution: "AI-powered diagnostic assistant with real-time patient monitoring",
      results: {
        efficiency: "85% faster diagnosis",
        accuracy: "94% diagnostic accuracy",
        savings: "$2M annual savings"
      },
      testimonial: "Metricdust's AI solution transformed our patient care capabilities. We now diagnose conditions 85% faster with unprecedented accuracy.",
      author: "Dr. Sarah Chen, Chief Medical Officer"
    },
    {
      company: "RetailMax Corporation",
      industry: "E-commerce",
      challenge: "Poor inventory management leading to 30% stock-outs",
      solution: "Machine learning-based demand forecasting and inventory optimization",
      results: {
        efficiency: "30% reduction in stock-outs",
        accuracy: "92% forecast accuracy",
        savings: "$5M inventory optimization"
      },
      testimonial: "The AI-powered inventory system revolutionized our supply chain. We reduced stock-outs by 30% while optimizing our inventory investment.",
      author: "Michael Rodriguez, Operations Director"
    },
    {
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      challenge: "Manual fraud detection missing 25% of fraudulent transactions",
      solution: "Real-time AI fraud detection with behavioral analysis",
      results: {
        efficiency: "99.7% fraud detection rate",
        accuracy: "0.1% false positives",
        savings: "$15M fraud prevention"
      },
      testimonial: "Metricdust's AI fraud detection system is phenomenal. We now catch 99.7% of fraudulent transactions with minimal false positives.",
      author: "Jennifer Park, Head of Security"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % successStories.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [successStories.length]);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % successStories.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[currentCase];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cyan-50 text-cyan-700 border-cyan-200">
            AI Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Real Results from AI Implementation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how our AI solutions have transformed businesses across industries, delivering measurable impact and competitive advantages.
          </p>
        </div>

        <div className="relative">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Left side - Story details */}
                <div className="p-12">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="outline" className="border-slate-300 text-slate-600">
                      {currentStory.industry}
                    </Badge>
                    <h3 className="text-2xl font-bold text-slate-900">{currentStory.company}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600">{currentStory.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">AI Solution</h4>
                      <p className="text-slate-600">{currentStory.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">Client Testimonial</h4>
                      <blockquote className="text-lg text-slate-700 italic mb-4">
                        "{currentStory.testimonial}"
                      </blockquote>
                      <div className="text-sm text-slate-500">— {currentStory.author}</div>
                    </div>
                  </div>
                </div>

                {/* Right side - Results metrics */}
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-12 text-white flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-8">Measurable Results</h4>
                  
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <TrendingUp className="w-8 h-8 mr-4 text-cyan-200" />
                      <div>
                        <div className="text-3xl font-bold">{currentStory.results.efficiency}</div>
                        <div className="text-cyan-200">Efficiency Improvement</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="w-8 h-8 mr-4 text-cyan-200" />
                      <div>
                        <div className="text-3xl font-bold">{currentStory.results.accuracy}</div>
                        <div className="text-cyan-200">Accuracy Rate</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-8 h-8 mr-4 text-cyan-200" />
                      <div>
                        <div className="text-3xl font-bold">{currentStory.results.savings}</div>
                        <div className="text-cyan-200">Annual Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button 
              onClick={prevCase}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCase ? 'bg-cyan-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextCase}
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

export default AISuccessStories;
