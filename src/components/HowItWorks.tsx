
import React from 'react';
import { ArrowRight, UserPlus, Briefcase, Bot, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account and set up your company profile in minutes.",
      details: "Quick onboarding process with team collaboration tools"
    },
    {
      icon: Briefcase,
      title: "Create Job",
      description: "Define job requirements and let our AI generate targeted interview questions.",
      details: "AI-powered job description optimization and skill matching"
    },
    {
      icon: Bot,
      title: "AI Interviews",
      description: "Candidates complete AI-powered video interviews with real-time analysis.",
      details: "Automated screening, skill assessment, and personality evaluation"
    },
    {
      icon: CheckCircle,
      title: "Hire",
      description: "Review AI-generated insights and make data-driven hiring decisions.",
      details: "Detailed candidate reports with recommendation scores"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined process makes hiring efficient and effective. Get started in 4 simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-slate-500 italic">{step.details}</p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-10">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to revolutionize your hiring?</h3>
            <p className="text-blue-100 mb-6">Join hundreds of companies already using our AI platform</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
