/**
 * @copyright 2025 Rahul Rawat
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/python-5.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/tensorflow-2.svg',
    label: 'TensorFlow',
    desc: 'Deep Learning Framework'
  },
  {
    imgSrc: '/images/pytorch-2.svg',
    label: 'PyTorch',
    desc: 'Deep Learning Framework'
  },
  {
    imgSrc: '/images/fastapi-1.svg',
    label: 'FastAPI',
    desc: 'Backend'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/aws-2.svg',
    label: 'Amazon Web Services',
    desc: 'Cloud Computing'
  },
  {
    imgSrc: '/images/docker-4.svg',
    label: 'Docker',
    desc: 'Deployment'
  },
  {
    imgSrc: "/images/langchain-1.svg",
    label: "LangChain",
    desc: "LLM & Prompt Engineering"
  },
  {
    imgSrc: "/images/langgraph.svg",
    label: "LangGraph",
    desc: "Agentic AI"
  },
  {
    imgSrc: "/images/openai.svg",
    label: "OpenAI",
    desc: "LLM Inference"
  },
  {
    imgSrc: "/images/github.svg",
    label: "Github",
    desc: "Version Control"
  },
  {
    imgSrc: "/images/colab.svg",
    label: "Google Colab",
    desc: "Jupyter Notebook"
  }
];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I Use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">Discover the cutting-edge tools and technologies I use to build high-performing, intelligent applications and platforms.</p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
