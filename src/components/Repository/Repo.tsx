import { useState } from 'react';

interface Project {
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    highlights: string[];
    type: 'featured' | 'project';
}

const projects: Project[] = [
    {
        title: 'GoldLens',
        description: 'Real-Time Macro Risk Dashboard for Gold',
        longDescription: 'Full-stack fintech dashboard tracking gold prices through macro indicators (US Real Yields, DXY, ETF flows) with real-time data ingestion.',
        tech: ['Spring Boot', 'PostgreSQL', 'Next.js', 'Recharts', 'React-Simple-Maps'],
        liveUrl: 'https://goldlens-ui.vercel.app/',
        githubUrl: 'https://github.com/adityaahir3105/goldlens-core',
        highlights: [
            'Scheduler-based API ingestion with rate-limit awareness',
            'Excel ETL pipeline for data processing',
            'Interactive world map visualization',
            'Answers "why gold moved?" in real-time',
        ],
        type: 'featured',
    },
    {
        title: 'AI QuoteBuilder Agent',
        description: 'Intelligent Quote Automation System',
        longDescription: 'AI-powered agent using Google ADK and MCP servers to automate complex installation quotes at Lowe\'s.',
        tech: ['Java 17', 'Google ADK', 'MCP Servers', 'Spring Boot', 'Kafka'],
        highlights: [
            'Reduced questionnaire time by 60%',
            'Intelligent form filling with context-aware suggestions',
            'Processes 5M+ quotes/month',
        ],
        type: 'featured',
    },
    {
        title: 'Ardent Sports',
        description: 'Cross-Platform Tournament App',
        longDescription: 'Full-stack mobile application for tournament management with real-time updates.',
        tech: ['Node.js', 'Express', 'Flutter', 'Azure', 'MongoDB'],
        highlights: [
            'JWT authentication & REST APIs',
            'Android/iOS cross-platform support',
            '99.8% uptime serving global users',
        ],
        type: 'project',
    },
    {
        title: 'Order Recovery System',
        description: 'Full-Stack Enterprise Application',
        longDescription: 'Internal tool at Lowe\'s for order recovery and management with reactive backend.',
        tech: ['React', 'Redux', 'Spring Boot', 'WebFlux', 'PostgreSQL'],
        highlights: [
            'Improved efficiency by 30%',
            'Design patterns: Factory, Singleton, Observer',
            '80%+ test coverage with TDD',
        ],
        type: 'project',
    },
    {
        title: 'StudyOS',
        description: 'Educational Platform',
        longDescription: 'Learning management system for students and educators.',
        tech: ['React', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/adityaahir3105/StudyOS',
        highlights: ['Interactive learning modules', 'Progress tracking'],
        type: 'project',
    },
    {
        title: 'FinDocs',
        description: 'Financial Document Manager',
        longDescription: 'Application for managing and organizing financial documents.',
        tech: ['React', 'TypeScript', 'Node.js'],
        githubUrl: 'https://github.com/adityaahir3105/FinDocs',
        highlights: ['Document categorization', 'Search functionality'],
        type: 'project',
    },
];

export default function Repo() {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const featuredProjects = projects.filter(p => p.type === 'featured');
    const otherProjects = projects.filter(p => p.type === 'project');

    return (
        <div>
            <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Projects</h2>
            </div>

            {/* Featured Projects */}
            <div className="space-y-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Featured
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:border-indigo-500/50 transition-all duration-300"
                            onMouseEnter={() => setActiveProject(index)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-indigo-400 text-sm font-medium">{project.description}</p>
                                </div>
                                <div className="flex space-x-2">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-700/50 hover:bg-indigo-600 transition-colors"
                                        >
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 transition-colors"
                                        >
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-4">{project.longDescription}</p>

                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded text-xs font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-1">
                                    {project.highlights.slice(0, 3).map((h, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-center">
                                            <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Other Projects */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    Other Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherProjects.map((project, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold text-white">{project.title}</h4>
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-1">
                                {project.tech.slice(0, 3).map((t, i) => (
                                    <span key={i} className="px-2 py-0.5 bg-gray-700/50 text-gray-400 rounded text-xs">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* View More on GitHub */}
            <div className="mt-8 text-center">
                <a
                    href="https://github.com/adityaahir3105?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800"
                >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View All 29 Repositories
                </a>
            </div>
        </div>
    );
}
