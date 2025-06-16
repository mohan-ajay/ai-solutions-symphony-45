
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building, Heart, ShoppingCart, Factory, GraduationCap, Car, Banknote, Plane } from "lucide-react";

const AIIndustries = () => {
  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      description: "AI-driven diagnostics, patient care optimization, and medical research acceleration.",
      useCases: ["Medical Imaging AI", "Drug Discovery", "Patient Monitoring", "Predictive Healthcare"]
    },
    {
      icon: Banknote,
      name: "Finance",
      description: "Intelligent fraud detection, algorithmic trading, and risk assessment solutions.",
      useCases: ["Fraud Detection", "Risk Analysis", "Algorithmic Trading", "Credit Scoring"]
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-commerce",
      description: "Personalized shopping experiences, inventory optimization, and demand forecasting.",
      useCases: ["Recommendation Engines", "Inventory Management", "Price Optimization", "Customer Analytics"]
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization.",
      useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain AI", "Production Optimization"]
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Personalized learning platforms, automated grading, and educational analytics.",
      useCases: ["Adaptive Learning", "Student Analytics", "Automated Assessment", "Content Personalization"]
    },
    {
      icon: Car,
      name: "Transportation",
      description: "Autonomous systems, route optimization, and smart logistics solutions.",
      useCases: ["Route Optimization", "Fleet Management", "Autonomous Vehicles", "Traffic Analysis"]
    },
    {
      icon: Building,
      name: "Real Estate",
      description: "Property valuation, market analysis, and smart building management.",
      useCases: ["Property Valuation", "Market Prediction", "Smart Buildings", "Investment Analysis"]
    },
    {
      icon: Plane,
      name: "Aviation",
      description: "Flight optimization, maintenance prediction, and passenger experience enhancement.",
      useCases: ["Flight Optimization", "Maintenance AI", "Passenger Analytics", "Safety Systems"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industries We're Transforming with AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI solutions are revolutionizing operations across diverse industries, delivering measurable results and competitive advantages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-cyan-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{industry.name}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{industry.description}</p>
                
                <div className="space-y-2">
                  {industry.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="flex items-center text-xs text-slate-500">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                      {useCase}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIIndustries;
