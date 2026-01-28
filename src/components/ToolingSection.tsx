import { motion } from "framer-motion";
import { Cloud, Database, Bot, Layout, Cpu, Zap, Server, Code } from "lucide-react";

const categories = [
  {
    title: "LLM Providers",
    icon: Cloud,
    items: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Llama & Open Source"],
    color: "primary",
  },
  {
    title: "Vector Databases",
    icon: Database,
    items: ["Pinecone", "Weaviate", "Chroma", "Qdrant"],
    color: "secondary",
  },
  {
    title: "Agent Frameworks",
    icon: Bot,
    items: ["LangChain", "LangGraph", "AutoGPT", "CrewAI"],
    color: "accent",
  },
  {
    title: "UI Frameworks",
    icon: Layout,
    items: ["Vercel AI SDK", "Chainlit", "Streamlit", "Gradio"],
    color: "primary",
  },
  {
    title: "Embedding Models",
    icon: Cpu,
    items: ["OpenAI Ada", "Cohere Embed", "Sentence Transformers", "BGE Models"],
    color: "secondary",
  },
  {
    title: "Orchestration",
    icon: Zap,
    items: ["LangGraph", "Temporal", "Prefect", "Apache Airflow"],
    color: "accent",
  },
  {
    title: "Serving & Inference",
    icon: Server,
    items: ["vLLM", "TGI", "Ollama", "Together AI"],
    color: "primary",
  },
  {
    title: "Development Tools",
    icon: Code,
    items: ["LangSmith", "Weights & Biases", "Phoenix Arize", "Prompt Flow"],
    color: "secondary",
  },
];

const colorMap = {
  primary: "bg-primary/10 text-primary hover:glow-primary",
  secondary: "bg-secondary/10 text-secondary hover:glow-secondary",
  accent: "bg-accent/10 text-accent hover:glow-accent",
};

export const ToolingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tooling & <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the landscape of tools and frameworks powering modern AI applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full card-hover">
                <div className={`p-3 rounded-lg w-fit mb-4 transition-all duration-300 ${colorMap[category.color as keyof typeof colorMap]}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
