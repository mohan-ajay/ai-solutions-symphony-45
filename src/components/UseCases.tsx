
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Rocket, ArrowRight } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Rocket,
      category: "Startups",
      title: "Scale Your Team Fast",
      description: "Build your dream team quickly with AI-powered screening that identifies top talent without the overhead of a large HR department.",
      features: ["Quick candidate screening", "Cost-effective hiring", "Skills-based matching", "Remote interview capabilities"],
      bgGradient: "from-green-600 to-emerald-600",
      iconBg: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      icon: Building,
      category: "Enterprises",
      title: "Enterprise-Scale Recruitment",
      description: "Handle high-volume hiring with advanced AI analytics, compliance features, and integration with existing HR systems.",
      features: ["Bulk candidate processing", "Advanced analytics dashboard", "GDPR compliance", "API integrations"],
      bgGradient: "from-blue-600 to-cyan-600",
      iconBg: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      category: "Hiring Teams",
      title: "Collaborative Hiring",
      description: "Streamline team-based hiring decisions with shared candidate insights, collaborative scoring, and automated workflows.",
      features: ["Team collaboration tools", "Shared candidate insights", "Custom scoring criteria", "Automated workflows"],
      bgGradient: "from-purple-600 to-pink-600",
      iconBg: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-600/20 text-blue-300 border-blue-400/30">
            Solutions for Every Team Size
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perfect Fit for Any Organization
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Whether you're a growing startup or an established enterprise, our AI platform adapts to your unique hiring needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {useCase.category}
                  </Badge>
                  <div className={`w-12 h-12 bg-gradient-to-br ${useCase.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <useCase.icon className={`w-6 h-6 ${useCase.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{useCase.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className={`w-full bg-gradient-to-r ${useCase.bgGradient} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}>
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">Not sure which solution fits your needs?</h3>
            <p className="text-slate-400 mb-6">Schedule a consultation with our team to find the perfect AI hiring solution for your organization.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                View All Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
