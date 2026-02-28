export default function Edu() {
    return (
        <div>
            <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent"></div>

                <div className="relative pl-12">
                    {/* Education Card */}
                    <div className="relative p-6 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-indigo-500/30 transition-all duration-300">
                        {/* Timeline dot */}
                        <div className="absolute -left-[2.35rem] top-8 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900"></div>

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h3 className="text-xl font-bold text-white">Nirma University</h3>
                                    <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded text-xs font-medium">
                                        9.0+ CGPA
                                    </span>
                                </div>
                                <p className="text-indigo-400 font-medium mb-1">
                                    B.Tech, Electronics and Communication Engineering
                                </p>
                                <div className="flex items-center text-gray-400 text-sm mb-4">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    2017 – 2021
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                                        Relevant Coursework
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Computer Networks', 'Machine Learning'].map((course, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* University Logo/Icon */}
                            <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl items-center justify-center">
                                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
