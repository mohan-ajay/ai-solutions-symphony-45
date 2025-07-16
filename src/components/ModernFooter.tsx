
import React from 'react';
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import { GlobeDemo } from './GlobeDemo';

const ModernFooter = () => {
  const navigation = {
    product: [
      { name: 'AI Interviews', href: '#' },
      { name: 'Candidate Screening', href: '#' },
      { name: 'Analytics Dashboard', href: '#' },
      { name: 'API Integration', href: '#' },
      { name: 'Mobile App', href: '#' }
    ],
    solutions: [
      { name: 'For Startups', href: '#' },
      { name: 'For Enterprises', href: '#' },
      { name: 'For Agencies', href: '#' },
      { name: 'For HR Teams', href: '#' },
      { name: 'Custom Solutions', href: '#' }
    ],
    company: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about-us' },
      { name: 'Services', href: '/services' },
      { name: 'Reflects', href: '/reflects' },
      { name: 'Contact', href: '/contact-us' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'System Status', href: '#' },
      { name: 'Security', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-black border-t border-slate-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-32 w-full">
          {/* GlobeDemo - 40% */}
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <GlobeDemo />
          </div>
          {/* Links - 60% */}
          <div className="w-full md:w-3/5 grid grid-cols-1 mt-32 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-base">
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
                    <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-base">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-400 text-base">lohith@metricdust.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-400 text-base">+1 (425) 900-9663</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-7 h-7 text-slate-400" />
                  <span className="text-slate-400 text-base">2519 Baker Ave. Unit 3 Everett, WA 98201</span>
                </li>
              </ul>
            </div>
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
                © 2024 Webist AI. All rights reserved.
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

export default ModernFooter;
