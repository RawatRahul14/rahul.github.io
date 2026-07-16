/**
 * @copyright 2025 Rahul Rawat
 * @license Apache-2.0
 */

const aboutItems = [
    {
        label: "Projects done",
        number: 15,
    },
    {
        label: "Years of experience",
        number: 2,
    },
];

const About = () => {
    return (
        <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-8 rounded-2xl md:p-16">
            {/* Heading */}
            <h1 className="text-sky-400 text-2xl font-semibold mb-6 md:text-5xl md:mb-8 text-center">
                About Me
            </h1>

            {/* Content */}
            <div className="space-y-6 mb-8 md:space-y-8 md:mb-12">
                <p className="text-zinc-300 text-lg md:text-xl text-center">
                Hello, I'm Rahul Rawat, a software engineer specializing in high-performance systems, 
                quantitative development, and distributed AI engineering.
                </p>
                <p className="text-zinc-300 text-lg md:text-xl text-center">
                I bridge the gap between mathematical rigor and low-latency execution. 
                My focus is on engineering ultra-fast data pipelines, parallel agent architectures, 
                and computational backends using C++ and Python building deterministic solutions 
                where performance and microsecond efficiency matter.
                </p>
            </div>

            {/* Horizontal Line */}
            <hr className="border-sky-400/50 my-6 md:my-8" />

            {/* Stats - Side by Side */}
            <div className="flex flex-row justify-center gap-8 md:gap-16">
                {aboutItems.map(({ label, number }, key) => (
                <div key={key} className="text-center">
                    <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-white md:text-5xl">{number}</span>
                    <span className="text-sky-400 font-bold text-2xl md:text-4xl">+</span>
                    </div>
                    <p className="text-sky-400 text-lg mt-2 md:text-xl font-medium">{label}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
};

export default About;
