// src/data/portfolio.js
export const portfolioItems = [
    // ICT & Media Projects
    {
        id: 1,
        title: "Sport Fiesta Registration",
        description: "A comprehensive Registration system, the system register participant and automatically assign a house and it check to make sure that the participant is not already registered, it also make sure there are the same number of participants in each house.",
        image: "/assets/img/portfolio/port5.png",
        category: "ict-media",
        technologies: ["React", "Node.js", "FireBase", "TypeScript"],
        features: ["Registration", "Analysis", "Automatic Distribution", "Real-time Analytics"],
        liveUrl: "https://house-reg.vercel.app/",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "App Global Website",
        description: "A modern and responsive website for a tech startup, showcasing their innovative products and services with seamless navigation and engaging visuals.",
        image: "/assets/img/portfolio/port3.png",
        category: "ict-media",
        technologies: ["React", "Firebase", "Stripe", "Redux"],
        features: ["Website", "Shopping ", "Payment Integration", "Order Tracking"],
        liveUrl: "https://app-global-website.vercel.app/",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Registration Management System",
        description: "A comprehensive Registration system, the system register participant and automatically assign a house and it check to make sure that the participant is not already registered, it also make sure there are the same number of participants in each house. management solution for streamlining operations and improving productivity.",
        image: "/assets/img/portfolio/port1.png",
        category: "ict-media",
        technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
        features: ["CRM", "Inventory Management", "Reporting", "Multi-tenant Architecture"],
        liveUrl: "https://teen-registration.vercel.app/",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "Boys Care Website",
        description: "Boys care mentorship website is a platform that connects mentors with mentees, providing resources and support for personal and professional growth.",
        image: "/assets/img/portfolio/port2.png",
        category: "ict-media",
        technologies: ["Vue.js", "Python", "MySQL", "WebRTC"],
        features: ["Mentorship", "Appointment Scheduling", "E-prescriptions", "Education"],
        liveUrl: "https://boyscarefoundation.vercel.app/",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "PriceWise",
        description: "PriceWish is an AI powered price comparison platform that helps users find the best deals across multiple online retailers.",
        image: "/assets/img/portfolio/port4.png",
        category: "ict-media",
        technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
        features: ["Real-time Tracking", "Route Optimization", "Fleet Management", "Delivery Analytics"],
        liveUrl: "https://pricewise-roan.vercel.app/",
        githubUrl: "#"
    },
    {
        id: 6,
        title: "Zira Smart Systems Solutions",
        description: "A modern and responsive website for a tech startup, showcasing their innovative products and services with seamless navigation and engaging visuals.",
        image: "/assets/img/portfolio/port6.png",
        category: "ict-media",
        technologies: ["React", "Laravel", "MySQL", "AWS"],
        features: ["Course Management", "Video Streaming", "Progress Tracking", "Certification"],
        liveUrl: "https://zirasmartsystemsolutions.com.ng/",
        githubUrl: "#"
    },

    // Renewable Energy Projects
    {
        id: 7,
        title: "Solar Farm Monitoring System",
        description: "A comprehensive monitoring and management system for large-scale solar farms, providing real-time performance analytics and maintenance alerts.",
        image: "/assets/img/portfolio/solar-farm.jpg",
        category: "renewable-energy",
        technologies: ["IoT Sensors", "React", "Python", "MySQL"],
        features: ["Real-time Monitoring", "Performance Analytics", "Maintenance Alerts", "Energy Production Reports"],
        liveUrl: "#",
        githubUrl: "#",
        results: [
            { value: "25%", label: "Efficiency Increase" },
            { value: "99.8%", label: "Uptime" }
        ]
    },
    {
        id: 8,
        title: "Residential Solar Installation",
        description: "Complete solar power solution for residential buildings with smart energy management and grid integration capabilities.",
        image: "/assets/img/portfolio/residential-solar.jpg",
        category: "renewable-energy",
        technologies: ["Solar Panels", "Battery Storage", "Smart Inverters", "Mobile App"],
        features: ["Energy Storage", "Grid Integration", "Mobile Monitoring", "Cost Savings"],
        liveUrl: "#",
        githubUrl: "#",
        results: [
            { value: "80%", label: "Energy Bill Reduction" },
            { value: "24/7", label: "Power Supply" }
        ]
    },
    {
        id: 9,
        title: "Wind Turbine Control System",
        description: "Advanced control and monitoring system for wind energy farms with predictive maintenance and performance optimization.",
        image: "/assets/img/portfolio/wind-turbine.jpg",
        category: "renewable-energy",
        technologies: ["PLC Systems", "SCADA", "React Dashboard", "Cloud Storage"],
        features: ["Remote Control", "Predictive Maintenance", "Performance Optimization", "Safety Monitoring"],
        liveUrl: "#",
        githubUrl: "#"
    },

    // Security Systems Projects
    {
        id: 10,
        title: "Smart CCTV Surveillance Network",
        description: "Intelligent CCTV surveillance system with facial recognition, motion detection, and remote monitoring capabilities for commercial complexes.",
        image: "/assets/img/portfolio/cctv-system.jpg",
        category: "security",
        technologies: ["IP Cameras", "AI Analytics", "React", "Node.js"],
        features: ["Facial Recognition", "Motion Detection", "Remote Access", "Cloud Storage"],
        liveUrl: "#",
        githubUrl: "#",
        results: [
            { value: "95%", label: "Detection Accuracy" },
            { value: "30%", label: "Response Time Improvement" }
        ]
    },
    {
        id: 11,
        title: "Vehicle Tracking Solution",
        description: "Comprehensive GPS tracking system for fleet management with real-time location tracking and route optimization.",
        image: "/assets/img/portfolio/vehicle-tracking.jpg",
        category: "security",
        technologies: ["GPS Trackers", "React", "MongoDB", "Google Maps API"],
        features: ["Real-time Tracking", "Geo-fencing", "Route History", "Fuel Monitoring"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 12,
        title: "Access Control System",
        description: "Advanced access control system with biometric authentication and centralized management for corporate offices.",
        image: "/assets/img/portfolio/access-control.jpg",
        category: "security",
        technologies: ["Biometric Scanners", "RFID", "React Dashboard", "MySQL"],
        features: ["Biometric Access", "Time-based Controls", "Visitor Management", "Audit Logs"],
        liveUrl: "#",
        githubUrl: "#"
    },

    // Training Projects
    {
        id: 13,
        title: "Web Development Bootcamp",
        description: "Comprehensive web development training program covering frontend and backend technologies with hands-on projects and mentorship.",
        image: "/assets/img/portfolio/web-training.jpg",
        category: "training",
        technologies: ["HTML/CSS", "JavaScript", "React", "Node.js"],
        features: ["Hands-on Projects", "Industry Mentors", "Career Support", "Certification"],
        liveUrl: "#",
        githubUrl: "#",
        results: [
            { value: "200+", label: "Students Trained" },
            { value: "85%", label: "Job Placement" }
        ]
    },
    {
        id: 14,
        title: "Solar Installation Training",
        description: "Professional training program for solar energy system installation, maintenance, and troubleshooting.",
        image: "/assets/img/portfolio/solar-training.jpg",
        category: "training",
        technologies: ["Practical Training", "Safety Protocols", "System Design", "Maintenance"],
        features: ["Practical Sessions", "Safety Training", "Certification", "Job Placement"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 15,
        title: "Cybersecurity Workshop",
        description: "Intensive cybersecurity training program covering network security, ethical hacking, and security best practices.",
        image: "/assets/img/portfolio/cyber-training.jpg",
        category: "training",
        technologies: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"],
        features: ["Hands-on Labs", "Real-world Scenarios", "Expert Instructors", "Certification"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 16,
        title: "Security Systems Installation Course",
        description: "Comprehensive training on installing and maintaining various security systems including CCTV, access control, and alarms.",
        image: "/assets/img/portfolio/security-training.jpg",
        category: "training",
        technologies: ["CCTV Installation", "Access Control", "Alarm Systems", "Troubleshooting"],
        features: ["Practical Installation", "System Configuration", "Maintenance", "Certification"],
        liveUrl: "#",
        githubUrl: "#"
    }
];