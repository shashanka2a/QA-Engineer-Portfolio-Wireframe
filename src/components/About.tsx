import { aboutData } from '../data/about';

export function About() {
  // Highlights imported from data

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-emerald-600 mb-2">{aboutData.subTitle}</p>
          <h2 className="text-gray-900 mb-4">{aboutData.sectionTitle}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-gray-900">
              Professional Background
            </h3>
            {aboutData.professionalBackground.map((paragraph, index) => (
              <p key={index} className="text-gray-600">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              {aboutData.skillsTags.map((tag, index) => (
                <span key={index} className={`px-4 py-2 rounded-full text-sm ${tag.colorClass}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {aboutData.highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}