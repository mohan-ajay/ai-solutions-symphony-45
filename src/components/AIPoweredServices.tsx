
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Bot, BarChart3, Cog, Database, Shield } from "lucide-react";

const AIPoweredServices = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms tailored to your business needs, from predictive analytics to deep learning applications.",
      features: ["Predictive Analytics", "Computer Vision", "Deep Learning", "Model Optimization"],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      icon: Bot,
      title: "AI Automation & Chatbots",
      description: "Intelligent automation systems and conversational AI that streamline operations and enhance customer experiences.",
      features: ["Process Automation", "Intelligent Chatbots", "Workflow Optimization", "24/7 AI Support"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Intelligence",
      description: "Transform raw data into actionable insights with AI-powered analytics and business intelligence solutions.",
      features: ["Real-time Analytics", "Data Visualization", "Business Intelligence", "Performance Metrics"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Cog,
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows for maximum efficiency.",
      features: ["API Integration", "System Migration", "Custom Integrations", "Performance Monitoring"],
      gradient: "from-green-600 to-cyan-600"
    },
    {
      icon: Database,
      title: "Big Data & Cloud AI",
      description: "Scalable cloud-based AI solutions that handle massive datasets and deliver enterprise-grade performance.",
      features: ["Cloud Infrastructure", "Data Pipeline", "Scalable Solutions", "Real-time Processing"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Secure AI implementations with robust security measures and compliance with industry standards.",
      features: ["Data Protection", "Compliance Management", "Security Audits", "Risk Assessment"],
      gradient: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation across all sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPoweredServices;
