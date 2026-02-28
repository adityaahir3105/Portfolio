import { useState } from 'react';

interface SkillCategory {
    name: string;
    icon: JSX.Element;
    color: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: 'Backend',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        color: 'from-orange-500 to-red-500',
        skills: ['Java 17', 'Spring Boot', 'WebFlux', 'Microservices', 'REST APIs', 'Node.js'],
    },
    {
        name: 'AI & Automation',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: 'from-purple-500 to-pink-500',
        skills: ['Google ADK', 'MCP Servers', 'AI Agents', 'LLM Integration', 'Intelligent Automation'],
    },
    {
        name: 'Cloud & DevOps',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        color: 'from-cyan-500 to-blue-500',
        skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
    },
    {
        name: 'Data',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        color: 'from-green-500 to-emerald-500',
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Kafka', 'Event-Driven', 'ETL Pipelines'],
    },
    {
        name: 'Frontend',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        color: 'from-blue-500 to-indigo-500',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
        name: 'Domain Expertise',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        color: 'from-amber-500 to-orange-500',
        skills: ['E-commerce', 'Cart & Checkout', 'Installation Services', 'Fintech', 'Real-Time Processing'],
    },
];

export default function Tech() {
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    return (
        <div>
            <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className={`group relative p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                            activeCategory === index
                                ? 'border-indigo-500/50 bg-gray-800/70 scale-[1.02]'
                                : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600 hover:bg-gray-800/50'
                        }`}
                        onMouseEnter={() => setActiveCategory(index)}
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        activeCategory === index
                                            ? 'bg-white/10 text-white'
                                            : 'bg-gray-700/50 text-gray-300'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
