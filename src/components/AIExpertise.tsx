
import React from 'react';
import { Card, CardContent } from "@/ui/card";
import { Award, Users, Zap, Shield, Target, TrendingUp } from "lucide-react";

const AIExpertise = () => {
  const expertise = [
    {
      icon: Award,
      title: "Proven AI Excellence",
      description: "Over 5 years of AI development experience with industry-leading expertise in machine learning and deep learning technologies.",
      metric: "500+ Projects",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: Users,
      title: "Expert AI Team",
      description: "Our team of PhD-level data scientists, ML engineers, and AI researchers brings cutting-edge knowledge to every project.",
      metric: "50+ AI Experts",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Fast deployment of AI solutions with our proven methodologies and pre-built frameworks that accelerate time-to-market.",
      metric: "3x Faster Delivery",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security measures, compliance frameworks, and data protection protocols ensure your AI systems are secure.",
      metric: "99.9% Uptime",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: Target,
      title: "Custom AI Solutions",
      description: "Tailored AI implementations designed specifically for your business needs, industry requirements, and growth objectives.",
      metric: "100% Custom",
      gradient: "from-red-600 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Track and measure the impact of AI on your business with comprehensive analytics and performance monitoring.",
      metric: "40% Avg ROI",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our AI Expertise?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We combine deep technical expertise with business acumen to deliver AI solutions that drive real results and competitive advantages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
            <div className="text-slate-400">Enterprise Clients</div>
          </div>
          <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
            <div className="text-slate-400">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-slate-400">AI Support</div>
          </div>
          <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;
