'use client';

import Image from 'next/image';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { heroData } from '../data/hero';
import { personalInfo } from '../data/personalInfo';

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-emerald-600">{heroData.greeting}</p>
              <h1 className="text-gray-900">
                {personalInfo.name}
              </h1>
              <h2 className="text-gray-700">
                {personalInfo.role}
              </h2>
              <p className="text-gray-600 max-w-xl">
                {personalInfo.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
              {heroData.stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-emerald-600">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {heroData.buttons.portfolio}
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Download className="mr-2" size={20} />
                {heroData.buttons.resume}
              </button>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                {heroData.buttons.contact}
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative z-10">
              <Image
                src={heroData.image.src}
                alt={heroData.image.alt}
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>

        <a
          href="#about"
          onClick={(e) => scrollToSection(e, '#about')}
          className="flex justify-center mt-12 md:mt-20 animate-bounce"
        >
          <ArrowDown className="text-emerald-600" size={32} />
        </a>
      </div>
    </section>
  );
}