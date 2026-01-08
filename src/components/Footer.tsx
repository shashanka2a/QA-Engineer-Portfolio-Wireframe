'use client';

import { Heart, ArrowUp } from 'lucide-react';
import { footerData } from '../data/footer';
import { personalInfo } from '../data/personalInfo';
import { navigationItems } from '../data/navigation';
import { headerData } from '../data/header';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Removed hardcoded quickLinks as they are now imported

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span>{headerData.logoText}</span>
              </div>
              <span className="text-white">{personalInfo.name}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {footerData.about}
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">{footerData.quickLinksTitle}</h4>
            <ul className="space-y-2">
              {navigationItems.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">{footerData.contactTitle}</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: {personalInfo.email}</p>
              <p>Location: {personalInfo.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} {personalInfo.name}. {footerData.copyright} <Heart className="inline text-red-500" size={16} /> {footerData.copyrightSuffix}
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}