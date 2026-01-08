import {
    CheckSquare,
    Code2,
    Network,
    Zap,
    Database,
    Cloud,
    GitBranch,
    Layout
} from 'lucide-react';

export const skillsData = {
    sectionTitle: "Skills & Expertise",
    subTitle: "What I Bring To The Table",
    skillCategories: [
        {
            icon: CheckSquare,
            title: 'Manual Testing',
            color: 'from-emerald-500 to-teal-500',
            skills: [
                { name: 'Test Case Design', level: 95 },
                { name: 'Exploratory Testing', level: 90 },
                { name: 'Regression Testing', level: 95 },
                { name: 'UAT Coordination', level: 85 },
                { name: 'Bug Tracking & Reporting', level: 95 },
                { name: 'Test Documentation', level: 90 },
            ],
        },
        {
            icon: Zap,
            title: 'Tools & Technologies',
            color: 'from-emerald-500 to-teal-500',
            skills: [
                { name: 'Jira / AWS', level: 95 },
                { name: 'Zephyr', level: 85 },
                { name: 'Git / GitHub / GitLab', level: 90 },
                { name: 'Jenkins / GitHub Actions', level: 80 },
                { name: 'Docker', level: 70 },
                { name: 'SQL', level: 75 },
            ],
        },
        {
            icon: Network,
            title: 'API Testing',
            color: 'from-emerald-500 to-teal-500',
            skills: [
                { name: 'Postman', level: 95 },
                { name: 'REST Assured', level: 85 },
            ],
        },
        {
            icon: Code2,
            title: 'Automation Testing',
            color: 'from-emerald-500 to-teal-500',
            skills: [
                { name: 'Selenium WebDriver', level: 90 },
                { name: 'Page Object Model', level: 90 },
            ],
        },
    ],
    additionalSkillsTitle: "Additional Competencies",
    additionalSkills: [
        { icon: Database, name: 'SQL & Database Testing', color: 'text-purple-600' },
        { icon: Cloud, name: 'Cloud Testing (AWS)', color: 'text-blue-600' },
        { icon: GitBranch, name: 'CI/CD Integration', color: 'text-teal-600' },
        { icon: Layout, name: 'Cross-browser Testing', color: 'text-orange-600' },
    ],
    programmingLanguagesTitle: "Programming Languages",
    programmingLanguages: ['Java', 'SQL']
};
