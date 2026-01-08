import { Award } from 'lucide-react';

export const experienceData = {
    sectionTitle: "Experience & Certifications",
    subTitle: "My Journey",
    experienceTitle: "Professional Experience",
    experiences: [
        {
            company: 'Tata Consultancy Services Limited',
            role: 'Systems Engineer',
            duration: 'March 2025 - Present',
            location: 'Hyderabad',
            type: 'Full-time',
            responsibilities: [
                'Designed, documented and executed comprehensive manual test cases for core banking applications across India, Taiwan, Hong Kong and Singapore operations, focusing on functional, regression, and UAT cycles.',
                'Validated and verified the accuracy and integrity of large-scale data migration tools, ensuring flawless transition and alignment with strict financial regulatory requirements.',
                'Collaborated closely with Business Analysts and cross-functional teams to analyze business requirements, clarify acceptance criteria, and ensured requirement traceability within the test plan.',
                'Managed the test execution lifecycle within an Agile environment, demonstrating proficiency in defect tracking and test repository management JIRA.',
                'Spearheaded client communication by initiating and leading key calls to present test results and obtain final sign-off on User Acceptance Testing (UAT) completion, demonstrating strong stakeholder management.',
                'Executed SQL queries for backend data verification, ensuring accuracy and integrity of migrated and transactional banking data.',
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            company: 'Infosys Limited',
            role: 'Senior Systems Engineer',
            duration: 'Oct 2021 - Feb 2024',
            location: 'Hyderabad',
            type: 'Full-time',
            responsibilities: [
                'Designed and executed comprehensive functional, regression, and integration test cases per sprint cycle, significantly reducing production defects.',
                'Validated application compatibility by successfully conducting extensive cross-browser testing (Chrome, Firefox, Edge, Safari) and dedicated mobile application testing across major iOS and Android platforms.',
                'Conducted critical API testing using Postman to verify backend services, data structures, and integration flows, ensuring seamless communication between microservices.',
                'Ensured compliance and broader market reach by performing rigorous accessibility testing using WCAG tools (e.g., WAVE, Axe) to meet mandated standards.',
                'Authored and maintained detailed test plans, test cases, and precise test data directly mapped to business requirements, ensuring complete traceability and coverage.',
                'Managed the defect lifecycle by accurately reporting, prioritizing, and tracking issues using JIRA and Zephyr Scale, resulting in faster defect resolution through continuous developer collaboration.',
                'Supported development collaboration by leveraging SonarQube reports to monitor application quality, identify high-risk code smells, and contribute to the prioritization of technical debt before release.',
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
    ],
    certificationsTitle: "Certifications",
    certifications: [
        {
            name: 'AWS Certified Developer - Associate',
            issuer: 'Amazon Web Services',
            date: 'Jan 26, 2024',
            icon: Award,
            validationNumber: 'b44132a5eaa24fe4b6f05592cd350839',
            verificationUrl: 'https://aws.amazon.com/verification',
        },
    ],
    continuousLearning: {
        title: "Continuous Learning",
        description: "Actively pursuing knowledge in emerging testing technologies, AI-assisted testing, and modern DevOps practices to stay ahead in the QA field."
    }
};
