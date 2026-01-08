import { Briefcase, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/experience';

export function Experience() {
  // Experience and certifications data moved to src/data/experience.ts

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-emerald-600 mb-2">{experienceData.subTitle}</p>
          <h2 className="text-gray-900 mb-4">{experienceData.sectionTitle}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 mb-6 flex items-center gap-3">
              <Briefcase className="text-emerald-600" size={28} />
              {experienceData.experienceTitle}
            </h3>

            <div className="space-y-6">
              {experienceData.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className={`h-1 bg-gradient-to-r ${exp.gradient}`}></div>

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-gray-900 mb-1">{exp.role}</h4>
                        <p className="text-emerald-600">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end gap-1">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-emerald-600" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-emerald-600" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-900 mb-3 text-sm">Key Responsibilities:</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <span className="text-emerald-600 mr-3 mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 mb-6 flex items-center gap-3">
              <Award className="text-emerald-600" size={28} />
              {experienceData.certificationsTitle}
            </h3>

            <div className="space-y-4">
              {experienceData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <cert.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1 text-sm">{cert.name}</h4>
                      <p className="text-gray-600 text-xs mb-1">{cert.issuer}</p>
                      <p className="text-emerald-600 text-xs mb-2 font-medium">{cert.date}</p>

                      {cert.validationNumber && (
                        <p className="text-[10px] text-gray-400 mb-2 font-mono break-all">
                          Validation: {cert.validationNumber}
                        </p>
                      )}

                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-medium border-b border-transparent hover:border-emerald-600 transition-all"
                        >
                          Verify Certificate
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl text-white">
              <h4 className="mb-4">{experienceData.continuousLearning.title}</h4>
              <p className="text-sm text-white/90">
                {experienceData.continuousLearning.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}