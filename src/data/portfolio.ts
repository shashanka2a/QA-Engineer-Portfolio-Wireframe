export const portfolioData = {
    sectionTitle: "Testing Portfolio",
    subTitle: "My Work",
    description: "A showcase of diverse testing projects across different domains, platforms, and technologies.",
    projects: [
        {
            name: 'E-Commerce Platform Testing',
            type: 'Web Application',
            description: 'Comprehensive testing of a large-scale e-commerce platform handling 100K+ daily users.',
            testingTypes: ['Functional Testing', 'Regression Testing', 'API Testing'],
            tools: ['Selenium', 'Postman', 'Jira', 'TestRail'],
            highlights: [
                'Automated 85% of regression test cases',
                'Reduced testing time by 60%',
                'Identified critical payment gateway issues before production',
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            name: 'Mobile Banking App',
            type: 'Mobile Application (iOS & Android)',
            description: 'End-to-end testing of a secure mobile banking application with complex financial transactions.',
            testingTypes: ['Mobile Testing', 'Security Testing', 'API Testing', 'Usability Testing'],
            tools: ['Appium', 'Charles Proxy', 'Postman', 'Firebase Test Lab'],
            highlights: [
                'Executed 500+ test cases across devices',
                'Found critical security vulnerabilities',
                'Improved app stability from 92% to 99.5%',
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            name: 'Healthcare Management System',
            type: 'Web & API',
            description: 'Testing HIPAA-compliant healthcare platform for patient data management and appointments.',
            testingTypes: ['API Testing', 'Integration Testing', 'Compliance Testing', 'Automation'],
            tools: ['Cypress', 'REST Assured', 'Postman', 'SoapUI', 'Azure DevOps'],
            highlights: [
                'Ensured HIPAA compliance requirements',
                'Built CI/CD integrated test suite',
                'Achieved 95% API test coverage',
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            name: 'SaaS Dashboard Platform',
            type: 'Web Application',
            description: 'Quality assurance for a data analytics dashboard with real-time reporting capabilities.',
            testingTypes: ['Functional Testing', 'Cross-browser Testing', 'Automation'],
            tools: ['Playwright', 'BrowserStack', 'GitHub Actions'],
            highlights: [
                'Tested across 15+ browser/device combinations',
                'Created reusable component test library',
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            name: 'Microservices API Suite',
            type: 'API & Backend',
            description: 'Comprehensive API testing for microservices architecture serving multiple client applications.',
            testingTypes: ['API Testing', 'Integration Testing', 'Contract Testing'],
            tools: ['Postman', 'Newman', 'Pact', 'Jenkins'],
            highlights: [
                'Implemented contract testing between services',
                'Automated API tests in CI/CD pipeline',
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            name: 'Real-time Chat Application',
            type: 'Web & Mobile',
            description: 'Testing of real-time messaging platform with video/audio calling features.',
            testingTypes: ['Functional Testing', 'WebSocket Testing', 'Mobile Testing'],
            tools: ['Selenium', 'Appium', 'WebSocket King', 'TestFlight'],
            highlights: [
                'Validated video call quality metrics',
                'Ensured cross-platform message sync',
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
    ]
};
