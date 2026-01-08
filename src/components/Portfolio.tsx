'use client';

import Image from 'next/image';
import { ExternalLink, Github, FileText, Construction } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import underConstructionImg from '../assets/under_construction.png';

export function Portfolio() {
  // Projects data moved to src/data/portfolio.ts

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-emerald-600 mb-2">{portfolioData.subTitle}</p>
          <h2 className="text-gray-900 mb-4">{portfolioData.sectionTitle}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {portfolioData.description}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100/50">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 flex justify-center bg-emerald-50/30">
                <Image
                  src={underConstructionImg}
                  alt="Portfolio Under Construction"
                  width={280}
                  height={280}
                  className="w-full max-w-[280px] aspect-square object-cover rounded-2xl shadow-lg transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-2">
                  <Construction size={40} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Currently Refining My Work</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm currently updating my portfolio with my latest projects, detailed test reports, and automation framework highlights.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                  Coming Soon
                </div>
                <p className="text-sm text-gray-400 italic">
                  Thank you for your patience! I'll be back online with a refreshed showcase of my QA expertise shortly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Existing projects commented out for now
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-emerald-600">{project.type}</p>
                </div>

                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>

                <div>
                  <p className="text-sm text-gray-900 mb-2">Testing Types:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.testingTypes.map((type, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-900 mb-2">Tools Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-900 mb-2">Key Achievements:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all text-sm">
                    <FileText size={16} />
                    Test Reports
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <Github size={16} />
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}