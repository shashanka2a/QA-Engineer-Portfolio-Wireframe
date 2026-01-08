import { Linkedin, Github, Mail } from 'lucide-react';

export const contactData = {
    sectionTitle: "Contact Me",
    subTitle: "Get In Touch",
    description: "I'm always open to discussing new opportunities, collaborations, or just chatting about QA and testing. Feel free to reach out!",
    form: {
        formUrl: "https://formspree.io/f/rajeshchandra.bandari@gmail.com", // Formspree will handle the verification on first submission
        title: "Send Me a Message",
        labels: {
            name: "Full Name",
            email: "Email Address",
            subject: "Subject",
            message: "Message"
        },
        placeholders: {
            name: "Rajesh Chandra Bandari",
            email: "rajeshchandra.bandari@gmail.com",
            subject: "Project Inquiry",
            message: "Tell me about your project or inquiry..."
        },
        button: {
            sending: "Sending...",
            default: "Send Message"
        },
        successMessage: "✓ Message sent successfully! I'll get back to you soon."
    },
    infoTitle: "Contact Information",
    connectTitle: "Connect With Me",
    connectDescription: "Let's connect on social media and stay in touch. I regularly share insights about QA, testing best practices, and industry trends.",
    socialLinks: [
        {
            icon: Linkedin,
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/rajeshchandrabandari/',
            color: 'hover:bg-blue-600',
        },
        {
            icon: Github,
            name: 'GitHub',
            url: 'https://github.com',
            color: 'hover:bg-gray-800',
        },
        {
            icon: Mail,
            name: 'Email',
            url: 'mailto:rajeshchandra.bandari@gmail.com',
            color: 'hover:bg-purple-600',
        },
    ],
    opportunities: {
        title: "Available for Opportunities",
        description: "Currently open to full-time positions, contract work, and consulting opportunities in:",
        list: [
            "QA Leadership & Team Management",
            "Test Automation Framework Development",
            "Quality Strategy Consulting"
        ]
    }
};
