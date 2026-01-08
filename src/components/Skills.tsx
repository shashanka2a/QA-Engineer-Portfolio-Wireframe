import { skillsData } from '../data/skills';

export function Skills() {
  // Skills data moved to src/data/skills.ts

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-emerald-600 mb-2">{skillsData.subTitle}</p>
          <h2 className="text-gray-900 mb-4">{skillsData.sectionTitle}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillsData.skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-8 md:p-12 rounded-xl">
          <h3 className="text-gray-900 text-center mb-8">{skillsData.additionalSkillsTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <skill.icon className={skill.color} size={32} />
                <span className="text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-gray-900 mb-4">{skillsData.programmingLanguagesTitle}</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.programmingLanguages.map((lang, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}