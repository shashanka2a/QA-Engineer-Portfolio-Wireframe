'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../data/navigation';
import { personalInfo } from '../data/personalInfo';
import { headerData } from '../data/header';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Removed scroll listeners as header is now absolute and moves with content

  // Removed hardcoded navItems as they are now imported

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, '#home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">{headerData.logoText}</span>
            </div>

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-700 font-medium hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-3 text-gray-700 font-medium hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}