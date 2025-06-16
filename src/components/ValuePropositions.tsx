
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Target, Clock, Users, TrendingUp } from "lucide-react";

const ValuePropositions = () => {
  const propositions = [
    {
      icon: Zap,
      title: "Faster Hiring with AI",
      description: "Reduce your time-to-hire by 70% with automated screening and intelligent candidate matching.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Bias-Free Interviews",
      description: "Eliminate unconscious bias with standardized AI assessments that focus purely on skills and competencies.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Target,
      title: "Automated Candidate Scoring",
      description: "Get objective, data-driven candidate evaluations with detailed skill assessments and cultural fit analysis.",
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  const benefits = [
    { icon: Clock, title: "70% Faster", description: "Average time to hire" },
    { icon: Users, title: "90% Accuracy", description: "In candidate matching" },
    { icon: TrendingUp, title: "50% Better", description: "Retention rates" }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main value propositions */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our AI Platform?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transform your recruitment process with cutting-edge AI technology that delivers better candidates faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {propositions.map((prop, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${prop.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <prop.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{prop.title}</h3>
                <p className="text-slate-400 leading-relaxed">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{benefit.title}</div>
              <div className="text-slate-400">{benefit.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
