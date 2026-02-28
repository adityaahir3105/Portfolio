import { useState } from 'react';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    type: 'current' | 'past';
    description: string;
    achievements: string[];
    tech: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: 'Software Engineer',
        company: "Lowe's India",
        period: 'May 2024 – Present',
        type: 'current',
        description: 'Cart & Checkout – AI-Powered Quoting & Installation Services',
        achievements: [
            'Built AI QuoteBuilder Agent using Google ADK and MCP servers, reducing questionnaire time by 60%',
            'Architected microservices migration reducing legacy dependency by 80% while processing 5M quotes/month',
            'Implemented event-driven architecture with Kafka handling 10K+ events/second',
            'Drove GCP/Kubernetes deployment achieving sub-second latency and zero downtime during Black Friday',
            'Optimized database performance reducing query times by 60%',
            'Built CI/CD pipelines enabling daily deployments with 85%+ test coverage',
            'Mentored 3 engineers improving team velocity by 25%',
        ],
        tech: ['Java 17', 'Spring Boot', 'WebFlux', 'Google ADK', 'MCP', 'Kafka', 'MongoDB', 'GCP', 'Kubernetes'],
    },
    {
        title: 'Associate Software Engineer',
        company: "Lowe's India",
        period: 'Aug 2022 – May 2024',
        type: 'past',
        description: 'Order Recovery System – Full-Stack Development',
        achievements: [
            'Engineered full-stack application improving efficiency by 30% using React and Spring Boot/WebFlux',
            'Applied design patterns (Factory, Singleton, Observer) ensuring maintainable architecture',
            'Integrated external APIs with comprehensive error handling and retry logic',
            'Achieved 80%+ test coverage through TDD approach with JUnit and E2E testing',
        ],
        tech: ['React', 'Redux', 'Java 17', 'Spring Boot', 'WebFlux', 'PostgreSQL', 'Git', 'Jenkins'],
    },
];

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    return (
        <div>
            <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Experience</h2>
            </div>

            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                            expandedIndex === index
                                ? 'border-indigo-500/50 bg-gray-800/50'
                                : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600'
                        }`}
                    >
                        <button
                            onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                            className="w-full p-5 text-left"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div className="flex items-center space-x-3">
                                    {exp.type === 'current' && (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                                            Current
                                        </span>
                                    )}
                                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                    <span className="text-indigo-400 font-medium">{exp.company}</span>
                                    <span>•</span>
                                    <span>{exp.period}</span>
                                </div>
                            </div>
                            <p className="text-gray-400 mt-2">{exp.description}</p>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                expandedIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="px-5 pb-5 space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-300">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/20"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Awards Section */}
            <div className="mt-8 p-5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                    <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-white">Recognition</h3>
                </div>
                <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                        <span className="text-amber-400">★</span>
                        <span className="text-gray-300">
                            <span className="font-medium text-white">Individual Excellence Award</span> – Top team contributor for AI-powered quote automation & Black Friday readiness
                        </span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-amber-400">★</span>
                        <span className="text-gray-300">
                            <span className="font-medium text-white">Zero Production Incidents</span> – Maintained 100% uptime during critical shopping events
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
