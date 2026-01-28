import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MessageSquare, Search, Bot, ArrowRight, Zap, Database, Cpu } from "lucide-react";

const tabs = [
  {
    id: "llms",
    label: "LLMs",
    icon: Brain,
    content: {
      title: "Large Language Models",
      subtitle: "The foundation of modern AI",
      steps: [
        {
          icon: Database,
          title: "Training Data",
          description: "Massive text datasets from the internet, books, and code repositories.",
        },
        {
          icon: Cpu,
          title: "Neural Network",
          description: "Billions of parameters learning patterns in language through self-attention.",
        },
        {
          icon: Zap,
          title: "Inference",
          description: "Given a prompt, the model predicts the most likely next tokens.",
        },
        {
          icon: MessageSquare,
          title: "Output",
          description: "Coherent, contextual text generation based on learned patterns.",
        },
      ],
    },
  },
  {
    id: "prompts",
    label: "Prompt Engineering",
    icon: MessageSquare,
    content: {
      title: "Prompt Engineering",
      subtitle: "The art of communicating with AI",
      steps: [
        {
          icon: MessageSquare,
          title: "System Prompt",
          description: "Set the context, role, and constraints for the AI assistant.",
        },
        {
          icon: Brain,
          title: "Few-Shot Examples",
          description: "Provide examples of desired input-output pairs for better results.",
        },
        {
          icon: Zap,
          title: "Chain of Thought",
          description: "Guide the model to reason step-by-step for complex problems.",
        },
        {
          icon: Search,
          title: "Iterate & Refine",
          description: "Test, measure, and optimize prompts for reliability and accuracy.",
        },
      ],
    },
  },
  {
    id: "rag",
    label: "RAG",
    icon: Search,
    content: {
      title: "Retrieval Augmented Generation",
      subtitle: "Knowledge-enhanced AI responses",
      steps: [
        {
          icon: Database,
          title: "Document Indexing",
          description: "Convert documents to embeddings and store in a vector database.",
        },
        {
          icon: Search,
          title: "Semantic Search",
          description: "Find the most relevant chunks based on query similarity.",
        },
        {
          icon: MessageSquare,
          title: "Context Injection",
          description: "Add retrieved context to the prompt before sending to LLM.",
        },
        {
          icon: Zap,
          title: "Grounded Response",
          description: "LLM generates answers based on real, retrieved information.",
        },
      ],
    },
  },
  {
    id: "agents",
    label: "Agents",
    icon: Bot,
    content: {
      title: "AI Agents",
      subtitle: "Autonomous reasoning systems",
      steps: [
        {
          icon: Brain,
          title: "Goal Understanding",
          description: "Agent receives and interprets the user's objective.",
        },
        {
          icon: Search,
          title: "Planning",
          description: "Break down the goal into actionable steps and strategies.",
        },
        {
          icon: Zap,
          title: "Tool Execution",
          description: "Call external tools, APIs, or functions to take actions.",
        },
        {
          icon: Bot,
          title: "Reflection",
          description: "Evaluate results and iterate until the goal is achieved.",
        },
      ],
    },
  },
];

export const DeepDiveSection = () => {
  const [activeTab, setActiveTab] = useState("llms");
  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <section id="deep-dive" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Deep <span className="gradient-text">Dive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore each concept with visual explanations and step-by-step breakdowns.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-2">{activeContent?.title}</h3>
              <p className="text-muted-foreground">{activeContent?.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {activeContent?.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full card-hover">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < (activeContent?.steps.length || 0) - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
