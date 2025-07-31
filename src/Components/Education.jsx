/**
 * @copyright 2025 Rahul Rawat
 * @license Apache-2.0
 */

const educationItems = [
    {
        title: "Postgraduate Certificate in Big Data Analytics",
        institution: "Lambton College, Canada",
        duration: "2024 - 2025",
        yearsSpent: "2 yrs",
        highlights: [
        "Coursework: Natural Language Processing, Neural Networks and Deep Learning, Big Data Tools, Big Data Algorithms and Statistics, NoSQL(Mongodb, Neo4j, Redis)",
        ],
        projects: [
        {
            name: "Pneumonia Detection CNN",
            url: "https://github.com/RawatRahul14/Pneumonia_detection_cnn",
        },
        {
            name: "Sentiment Analysis using NLP",
            url: "https://github.com/RawatRahul14/Sentiment-Analysis-using-NLP",
        },
        ],
    },
    {
        title: "Bachelor of Science in Mathematics",
        institution: "SD College, Panjab University",
        duration: "2019 - 2022",
        yearsSpent: "3 yrs",
        highlights: [
        "Coursework: Linear Algebra, Probability, Calculus, Differential Equations",
        ],
        projects: [],
    },
];

const Education = () => {
    return (
        <section id="education" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-8 rounded-2xl md:p-16">
            <h1 className="text-sky-400 text-2xl font-semibold mb-12 md:text-5xl text-center">
                Education
            </h1>

            <div className="relative border-l-4 border-sky-400 pl-12 space-y-12">
                {educationItems.map(({ title, institution, duration, highlights, yearsSpent, projects = [] }, index) => (
                <div key={index} className="relative">
                    {/* Dot + Horizontal Years */}
                    <div className="absolute -left-[5.5rem] top-1 flex items-center gap-2 text-sm text-zinc-400">
                    <span className="text-xs">{yearsSpent}</span>
                    <div className="w-3 h-3 rounded-full bg-sky-400 border-4 border-zinc-900"></div>
                    </div>

                    {/* Timeline Content */}
                    <p className="text-sm text-zinc-400 mb-1">{duration}</p>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-zinc-300 text-sm mb-2">{institution}</p>

                    <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                    {highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                    </ul>

                    {/* Projects (if any) */}
                    {projects.length > 0 && (
                    <div className="mt-3">
                        <p className="text-zinc-300 text-sm font-medium mb-1">Projects:</p>
                        <ul className="list-disc pl-5 text-sm text-sky-400 space-y-1">
                        {projects.map((proj, i) => (
                            <li key={i}>
                            <a
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline hover:text-sky-300"
                            >
                                {proj.name}
                            </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
};

export default Education;