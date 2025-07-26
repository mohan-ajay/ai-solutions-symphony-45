import React, { useEffect, useState } from 'react';
import { useScrollDirection } from '@/MetricDustVisualizer/hooks/useScrollDirection';
import { FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about-us' },
  { name: 'Reflect', href: '/reflects' },
  { name: 'Contact', href: '/contact-us' },
];

const ModernHeader = ({ alwaysHideOnScroll = false, isModalOpen = false }: { alwaysHideOnScroll?: boolean; isModalOpen?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${scrolled ? 'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100' : ''}`}
        style={!scrolled ? { background: 'none', boxShadow: 'none', border: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' } : {}}
      >
        {scrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-500/10 backdrop-blur-md border-b border-white/10 z-[-1]" />
        )}
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo Left */}
          <a href="/" className="flex items-center group">
            <img src="/logo_check.png" alt="Logo" className="h-8 sm:h-10 w-auto object-contain bg-transparent" />
          </a>

          {/* Desktop Navigation - Hidden on mobile */}
          <ul className="hidden md:flex flex-1 justify-center gap-2 lg:gap-5 text-white font-bold text-sm lg:text-base">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-3 py-2 lg:px-5 transition-colors duration-200
                    hover:bg-gray-600 hover:text-white hover:rounded-xl
                    focus:bg-gray-600 focus:text-white focus:rounded-xl
                    ${currentPath === link.href ? 'h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100' : ''}
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Phone and LinkedIn - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4 ml-4">
            <a href="tel:+14253009663" className="text-white text-sm lg:text-base font-semibold hover:text-cyan-400 transition-colors duration-200">
              +1-425-300-9663
            </a>
            <a href="https://www.linkedin.com/company/metricdust/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-200 text-xl lg:text-2xl">
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile Hamburger Button - Visible only on mobile */}
          <button
            className="md:hidden text-white text-2xl hamburger-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Sidebar */}
      <div
        className={`mobile-menu-container fixed top-0 right-0 w-64 h-full bg-gray-900 bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          
          <ul className="flex flex-col space-y-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block text-white text-xl font-semibold px-4 py-2 rounded-lg transition-colors duration-200
                    ${currentPath === link.href ? 'bg-gray-700' : 'hover:bg-gray-800'}
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8 border-t border-gray-700">
            <a
              href="tel:+14253009663"
              className="block text-white text-lg font-semibold mb-4 hover:text-cyan-400 transition-colors duration-200"
            >
              +1-425-300-9663
            </a>
            <a
              href="https://www.linkedin.com/company/metricdust/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-cyan-400 transition-colors duration-200 text-2xl"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};

export default ModernHeader;