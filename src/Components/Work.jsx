/**
 * @copyright 2025 Rahul Rawat
 * @license Apache-2.0
 */

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">
          My Portfolio Highlights
        </h2>

        <div className="space-y-8">
          {/* FinTech Chat Bot */}
          <div className="bg-zinc-800 p-6 rounded-xl ring-1 ring-zinc-700">
            <h3 className="text-xl font-semibold text-white mb-2">
              PiuFi - AI-Powered FinTech Assistant
            </h3>
            <p className="text-zinc-300 mb-4">
              An end-to-end multi-agent financial assistant that analyzes documents, forecasts stock prices, and answers user queries with reasoning control using LLMs, deep learning, and real-time indicators.
            </p>

            <div className="mb-2">
              <span className="font-medium text-zinc-300">Tags:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  "Python", "LangGraph", "FastAPI", "Streamlit", "Large Language Models",
                  "Agentic AI", "Retrieval Augmented Generation(RAG)", "MongoDB", "VectorDB(FAISS)"
                ].map((tag, key) => (
                  <span key={key} className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="font-medium text-zinc-300">Key Features:</span>
            <ul className="list-disc list-inside text-zinc-400 mb-4 mt-2 space-y-1">
              <li>🧠 Agentic AI System: LangGraph-based multi-agent flow for task decomposition, routing, and fallback reasoning</li>
              <li>📊 Stock Forecasting: Bi-LSTM model predicts multi-day prices with more than 80% directional accuracy on TSLA, AAPL, GOOG</li>
              <li>📁 Document Intelligence: Upload PDFs/CSVs to extract metrics, ratios, and tables using OpenAI + FAISS RAG pipeline</li>
              <li>📈 Indicator Analysis: Live analysis of RSI, MACD, Bollinger Bands, ATR</li>
            </ul>

            <span className="font-medium text-zinc-300">Tech Stack:</span>
            <ul className="list-disc list-inside text-zinc-400 text-sm mb-1">
              <li>Backend: FastAPI, MongoDB, FAISS (Pinecone coming soon), Appwrite</li>
              <li>Large Language Models (LLM): OpenAI GPT-4, LangChain, LangGraph</li>
              <li>Machine Learning: PyTorch, Bidirectional-LSTM layers</li>
              <li>Frontend: Streamlit (React coming soon)</li>
            </ul>

            <p className="text-zinc-300 mt-3">
              <span className="font-medium text-white">Outcome:</span> Achieved 80%+ directional accuracy on backtests with TSLA, AAPL, and GOOG. Enables real-time forecasting, document-based financial analysis, and interactive AI-assisted reasoning — making it ideal for analysts, traders, and fintech platforms.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="https://fintech-chatbot-14.streamlit.app/" target="_blank" className="text-sky-400 hover:underline">
                🌐 Live Demo
              </a>
              <a href="https://github.com/RawatRahul14/FinTech-Bot" target="_blank" className="text-sky-400 hover:underline">
                📂 GitHub Repo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Work;
