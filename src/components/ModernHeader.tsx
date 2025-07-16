import React from 'react';
import { useScrollDirection } from '@/MetricDustVisualizer/hooks/useScrollDirection';
import { FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about-us' },
  { name: 'Reflects', href: '/reflects' },
  { name: 'Contact', href: '/contact-us' },
];

const ModernHeader = ({ alwaysHideOnScroll = false }: { alwaysHideOnScroll?: boolean }) => {
  const scrollDirection = useScrollDirection();
  const shouldHide = alwaysHideOnScroll
    ? scrollDirection !== undefined && window.scrollY > 0
    : scrollDirection === 'down';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${shouldHide ? '-translate-y-full' : 'translate-y-0'}
        ${!shouldHide && scrollDirection === 'up' ? 'bg-black/90 backdrop-blur' : 'bg-transparent'}
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo Left */}
        <a href="/" className="flex items-center group">
          <img src="/logo_check.png" alt="Logo" className="h-10 w-auto object-contain bg-transparent" />
        </a>
        {/* Links Centered */}
        <ul className="flex-1 flex justify-center gap-10 text-slate-200 text-lg font-medium">
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
        {/* Phone and LinkedIn Right */}
        <div className="flex items-center gap-4 ml-4">
          <a href="tel:+14253009663" className="text-white text-base font-semibold hover:text-cyan-400 transition-colors duration-200">
            +1-425-300-9663
          </a>
          <a href="https://www.linkedin.com/company/metricdust/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-200 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default ModernHeader;
