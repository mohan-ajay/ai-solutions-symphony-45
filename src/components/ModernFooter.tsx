
import React from 'react';
import { Brain, Mail, Phone, MapPin, Inbox, Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import { SimpleGlobe } from './SimpleGlobe';

const ModernFooter = () => {
  const navigation = {
    product: [
      { name: 'AI Interviews', href: '#' },
      { name: 'Candidate Screening', href: '#' },
      { name: 'Analytics Dashboard', href: '#' },
      { name: 'API Integration', href: '#' },
      { name: 'Mobile App', href: '#' }
    ],
    services: [
      { name: 'AI & Automation', href: '/services' },
      { name: 'Digital Transformation', href: '/services' },
      { name: 'Cloud Native & Quantam', href: '/services' },
      { name: 'Security & Test', href: '/services' },
    ],
    company: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about-us' },
      { name: 'Services', href: '/services' },
      { name: 'Reflect', href: '/reflects' },
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
    { icon: Linkedin, href: 'https://www.linkedin.com/company/metricdust', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black border-t border-slate-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="flex flex-col md:flex-row gap-16 sm:gap-32 w-full">
          {/* GlobeDemo - 40% */}
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <div className="w-full max-w-[300px] sm:max-w-none">
              <GlobeDemo />
            </div>
          </div>
          {/* Links - 60% */}
          <div className="w-full md:w-3/5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-x-3 mt-8 sm:mt-32">
            <div className="col-span-1 pr-4 sm:pr-8">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">Services</h3>
              <ul className="space-y-2 sm:space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 pl-4 sm:pl-8">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-1 mt-6 sm:mt-0">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Mail className="w-6 h-6 sm:w-10 sm:h-10 text-slate-400 mt-1" />
                  <span className="text-slate-400 text-sm sm:text-base">lohith@metricdust.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  <span className="text-slate-400 text-sm sm:text-base">+1 (425) 900-9663</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-6 h-6 sm:w-10 sm:h-10 text-slate-400 mt-1" />
                  <span className="text-slate-400 text-sm sm:text-base">2519 Baker Ave. Unit 3 Everett, WA 98201</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Copyright and legal */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 mb-4 lg:mb-0 text-center lg:text-left">
              <p className="text-slate-400 text-sm">
                © 2024 Webist AI. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start space-x-2 sm:space-x-4">
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
                  target='_blank'
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"/>
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

