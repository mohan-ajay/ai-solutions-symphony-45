import React from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Success Stories', href: '#success' },
  { name: 'Contact', href: '#contact' },
];

const ModernHeader = () => {
  const scrollDirection = useScrollDirection();
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-center px-8 py-5">
        <ul className="flex gap-10 text-slate-200 text-lg font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ModernHeader;
