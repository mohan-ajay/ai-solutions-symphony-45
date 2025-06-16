
import React from 'react';
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const MetricdustFooter = () => {
  const navigation = {
    services: [
      { name: 'Machine Learning', href: '#' },
      { name: 'AI Automation', href: '#' },
      { name: 'Data Analytics', href: '#' },
      { name: 'AI Integration', href: '#' },
      { name: 'Cloud AI Solutions', href: '#' }
    ],
    industries: [
      { name: 'Healthcare', href: '#' },
      { name: 'Finance', href: '#' },
      { name: 'Retail', href: '#' },
      { name: 'Manufacturing', href: '#' },
      { name: 'Education', href: '#' }
    ],
    company: [
      { name: 'About Metricdust', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News & Blog', href: '#' },
      { name: 'Contact Us', href: '#' }
    ],
    solutions: [
      { name: 'Enterprise AI', href: '#' },
      { name: 'Custom Development', href: '#' },
      { name: 'AI Consulting', href: '#' },
      { name: 'Training & Support', href: '#' },
      { name: 'AI Strategy', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Security', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Metricdust</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Leading AI solutions provider transforming businesses through cutting-edge artificial intelligence, machine learning, and data analytics.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">hello@metricdust.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {navigation.industries.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright and legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                © 2024 Metricdust. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {navigation.legal.map((item) => (
                  <a key={item.name} href={item.href} className="text-slate-500 hover:text-slate-400 transition-colors text-xs">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MetricdustFooter;
