import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
    const contactLinks = [
        {
            name: 'Email',
            value: 'ahiraditya31@gmail.com',
            href: 'mailto:ahiraditya31@gmail.com',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            value: 'linkedin.com/in/adityaahir01',
            href: 'https://linkedin.com/in/adityaahir01',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
        },
        {
            name: 'GitHub',
            value: 'github.com/adityaahir3105',
            href: 'https://github.com/adityaahir3105',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'Phone',
            value: '+91 9979613073',
            href: 'tel:+919979613073',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
        },
        {
            name: 'Location',
            value: 'Bengaluru, India',
            href: null,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    const whatIDo = [
        {
            title: 'Backend Development',
            description: 'Building scalable microservices and APIs with Java, Spring Boot, and reactive systems.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
        },
        {
            title: 'AI & Automation',
            description: 'Developing AI agents and intelligent automation systems using Google ADK and MCP servers.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Cloud Architecture',
            description: 'Designing and deploying cloud-native applications on AWS, GCP, and Azure with Kubernetes.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
        },
        {
            title: 'Full-Stack Development',
            description: 'Creating end-to-end solutions with React, Next.js, and modern frontend technologies.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>About - Aditya Ahir</title>
                <meta name="description" content="Learn more about Aditya Ahir - Software Engineer specializing in AI-powered backend systems and microservices." />
                <meta name="keywords" content="Aditya Ahir, Software Engineer, About, Contact" />
                <meta name="theme-color" content="#6366f1" />
            </Head>

            <main>
                {/* Hero Section */}
                <section className="full-container">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
                            </h1>
                            
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    I'm <span className="text-white font-semibold">Aditya Ahir</span>, a Software Engineer at 
                                    <span className="text-indigo-400 font-semibold"> Lowe's India</span> with 3.7+ years of experience 
                                    building AI-powered backend systems and microservices architectures that handle millions of transactions.
                                </p>
                                <p>
                                    I specialize in transforming legacy monoliths into modern, scalable solutions. My work focuses on 
                                    <span className="text-white"> Spring Boot, AI agents, event-driven architectures</span>, and 
                                    automation with a strong emphasis on measurable business impact and clean code.
                                </p>
                                <p>
                                    Currently, I'm working on AI-powered quoting systems that have reduced questionnaire time by 60% 
                                    and process 5M+ quotes monthly with 99.9% uptime.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a 
                                    href="mailto:ahiraditya31@gmail.com"
                                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Get In Touch
                                </a>
                                <a 
                                    href="/Aditya_Ahir_Resume.pdf" 
                                    download
                                    className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What I Do Section */}
                <section className="full-container mt-16">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </span>
                        What I Do
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {whatIDo.map((item, index) => (
                            <div 
                                key={index}
                                className="p-5 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-indigo-500/30 hover:bg-gray-800/50 transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="full-container mt-16 mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        Contact
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {contactLinks.map((contact, index) => (
                            <div key={index}>
                                {contact.href ? (
                                    <a
                                        href={contact.href}
                                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="flex items-center space-x-4 p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-indigo-500/30 hover:bg-gray-800/50 transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 bg-gray-700/50 group-hover:bg-indigo-600/20 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-indigo-400 transition-all duration-300">
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{contact.name}</div>
                                            <div className="text-white font-medium group-hover:text-indigo-400 transition-colors">{contact.value}</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-center space-x-4 p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
                                        <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400">
                                            {contact.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{contact.name}</div>
                                            <div className="text-white font-medium">{contact.value}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800 bg-gray-900/50">
                <div className="full-container py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Aditya Ahir. Built with Next.js & Tailwind CSS
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://github.com/adityaahir3105" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="https://linkedin.com/in/adityaahir01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="mailto:ahiraditya31@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
