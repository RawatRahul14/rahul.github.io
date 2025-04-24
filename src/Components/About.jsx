/**
 * @copyright 2025 Rahul Rawat
 * @license Apache-2.0
 */

const aboutItems = [
    {
      label: 'Project done',
      number: 15
    },
    {
      label: 'Years of experience',
      number: 2
    }
];

const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-8 rounded-2xl md:p-16">
                {/* Heading */}
                <h1 className="text-white text-2xl font-semibold mb-6 md:text-5xl md:mb-8 text-center">
                    About Me
                </h1>

                {/* Content */}
                <div className="space-y-6 mb-8 md:space-y-8 md:mb-12">
                    <p className="text-zinc-300 text-lg md:text-xl text-center">
                        Hello, I&apos;m Rahul Rawat, a Data Scientist passionate about solving real-world problems with AI and data-driven insights.
                    </p>
                    <p className="text-zinc-300 text-lg md:text-xl text-center">
                        With expertise in machine learning, big data, and deep learning, I specialize in building innovative solutions to optimize business processes, enhance decision-making, and uncover actionable insights. Whether it&apos;s creating predictive models, developing interactive dashboards, or implementing AI-powered systems, my goal is to deliver impactful results.
                    </p>
                </div>

                {/* Horizontal Line */}
                <hr className="border-zinc-600 my-6 md:my-8" />

                {/* Stats - Side by Side */}
                <div className="flex flex-row justify-center gap-8 md:gap-16">
                    {aboutItems.map(({ label, number }, key) => (
                        <div key={key} className="text-center">
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-3xl font-bold md:text-5xl">{number}</span>
                                <span className="text-sky-400 font-bold text-2xl md:text-4xl">+</span>
                            </div>
                            <p className="text-zinc-400 text-lg mt-2 md:text-xl">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About