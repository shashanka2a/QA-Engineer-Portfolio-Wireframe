import { Target, CheckCircle, Code, Users } from 'lucide-react';

export const aboutData = {
    sectionTitle: "About Me",
    subTitle: "Get To Know Me",
    professionalBackground: [
        "With over 3 years of experience in software quality assurance, I've worked across various domains including BFSI, and Energy & Utility applications. My journey started with manual testing and evolved into comprehensive automation.",
        "I specialize in creating robust test strategies that combine manual exploratory testing with automated regression suites, and API testing. My goal is to ensure that every release meets the highest quality standards while maintaining development velocity."
    ],
    skillsTags: [
        { label: "Manual Testing", colorClass: "bg-emerald-100 text-emerald-700" },
        { label: "Test Automation", colorClass: "bg-teal-100 text-teal-700" },
        { label: "API Testing", colorClass: "bg-teal-100 text-teal-700" }
    ],
    highlights: [
        {
            icon: Target,
            title: 'Testing Philosophy',
            description: 'Quality is not an act, it is a habit. I believe in preventing bugs rather than just finding them.',
        },
        {
            icon: CheckCircle,
            title: 'Attention to Detail',
            description: 'Meticulous approach to identifying edge cases and ensuring comprehensive test coverage.',
        },
        {
            icon: Code,
            title: 'Automation Expertise',
            description: 'Building robust test automation frameworks that scale with your application.',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'Working closely with developers, product managers, and stakeholders to deliver quality software.',
        },
    ]
};
