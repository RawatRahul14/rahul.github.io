/**
 * @copyright 2025 Rahul Rawat
 * @license Apache-2.0
 */

const experienceItems = [
    {
        role: "Core Architect & Lead Developer",
        company: "Probabilistic Index Regime Engine",
        period: "Aug 2026 - Present",
        location: "Remote",
        description: [
            "Architected a modular probabilistic market regime detection engine for the NIFTY 50 index, orchestrating parallelized numerical market data pipelines and asynchronous financial news workflows via asyncio.",
            "Engineered an embedded analytical data layer in DuckDB, implementing incremental multi-period log returns and rolling annualized volatility models (3, 5, 7, 10, and 21-day windows) directly via optimized SQL window functions.",
            "Built an in-memory semantic deduplication pipeline using sentence-transformers (all-MiniLM-L6-v2) and vectorized cosine similarity matrix operations, filtering redundant financial news before downstream inference.",
            "Designed a concurrent LLM sentiment classification agent using structured Pydantic schemas to extract calibrated directional probability distributions (P_bull, P_neutral, P_bear), confidence, and market scope from multi-source news streams."
        ],
        tags: [
            "Python",
            "DuckDB",
            "Asyncio",
            "Sentence-Transformers",
            "LangGraph",
            "Pydantic",
            "Time-Series Analysis",
            "Quantitative Finance"
        ],
        link: "https://github.com/RawatRahul14/Probabilistic-Index-Regime-Engine"
    },
    {
        role: "Technical Leader",
        company: "Lambton College",
        period: "Jan 2025 - Apr 2025",
        location: "Mississauga, Canada",
        description: [
        "Engineered a high-throughput RAG pipeline using LangChain and FAISS, leveraging LLMs to execute real-time text extraction, document summarization, and deterministic query answering across complex financial reports.",
        "Fine-tuned a BERT classifier for span vs. arithmetic query detection, achieving 96.59% accuracy, and deployed it via AWS SageMaker to reduce inference time from 2 minutes to 2 seconds.",
        "Integrated Unstructured.io to accurately extract and structure financial tables and paragraphs from complex PDFs, enabling downstream retrieval and reasoning tasks."
        ],
        tags: ["Transformers", "Large Language Models", "FinTech", "AWS SageMaker", "AI Agents", "Chatbot"],
        link: "https://github.com/LCM-W25-3035/FinChatbot/tree/master"
    }
    
];

const Experience = () => {
    return (
        <section id="experience" className="section">
        <div className="container">
            <div className="bg-zinc-900/60 p-6 md:p-12 rounded-2xl shadow-xl border border-zinc-700">
            <h2 className="text-sky-400 text-2xl md:text-4xl font-bold mb-10 border-b border-zinc-700 pb-4">
                Experience Snapshot
            </h2>

            <div className="space-y-8">
                {experienceItems.map(({ role, company, period, location, description, tags, link }, index) => (
                <div
                    key={index}
                    className="bg-zinc-800/60 hover:bg-zinc-800 transition-colors p-5 rounded-xl border-l-4 border-sky-500"
                >
                    <div className="flex justify-between items-start md:items-center gap-4 flex-col md:flex-row">
                    <div>
                        <h3 className="text-white text-xl font-semibold">{role}</h3>
                        <p className="text-zinc-400 text-sm">{company} | {location}</p>
                    </div>
                    <span className="text-zinc-400 text-sm font-mono whitespace-nowrap">{period}</span>
                    </div>
                    <ul className="list-disc text-zinc-300 mt-3 text-sm pl-5 space-y-2">
                    {description.map((point, i) => (
                        <li key={i} className="leading-relaxed">{point}</li>
                    ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, i) => (
                        <span
                        key={i}
                        className="bg-sky-800/20 text-sky-400 text-xs font-medium px-2 py-1 rounded"
                        >
                        #{tag}
                        </span>
                    ))}
                    </div>
                    {link && (
                    <div className="mt-4">
                        <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sky-400 underline hover:text-sky-300"
                        >
                        View Project
                        </a>
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

export default Experience;
