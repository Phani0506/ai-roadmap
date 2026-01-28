import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Eye, Search, Brain, ArrowRight, Sparkles, Database, Zap, Bot, MessageSquare } from "lucide-react";

interface ExplainerItem {
  id: string;
  title: string;
  icon: React.ElementType;
  steps: { icon: React.ElementType; label: string; detail: string }[];
}

const explainers: ExplainerItem[] = [
  {
    id: "attention",
    title: "How Attention Works",
    icon: Eye,
    steps: [
      { icon: MessageSquare, label: "Input Tokens", detail: "Text is split into tokens and converted to embeddings" },
      { icon: Search, label: "Query, Key, Value", detail: "Each token creates Q, K, V vectors for comparison" },
      { icon: Sparkles, label: "Attention Scores", detail: "Dot product between queries and keys determines relevance" },
      { icon: Zap, label: "Weighted Sum", detail: "Values are weighted by attention scores and combined" },
      { icon: Brain, label: "Context-Aware Output", detail: "Each token now contains information from all relevant tokens" },
    ],
  },
  {
    id: "rag",
    title: "How RAG Works",
    icon: Search,
    steps: [
      { icon: Database, label: "Index Documents", detail: "Documents are chunked, embedded, and stored in vector DB" },
      { icon: MessageSquare, label: "User Query", detail: "User asks a question that needs external knowledge" },
      { icon: Search, label: "Semantic Search", detail: "Query is embedded and similar chunks are retrieved" },
      { icon: Sparkles, label: "Context Augmentation", detail: "Retrieved chunks are added to the prompt context" },
      { icon: Brain, label: "Grounded Response", detail: "LLM generates answer using retrieved information" },
    ],
  },
  {
    id: "agents",
    title: "How Agents Think",
    icon: Bot,
    steps: [
      { icon: MessageSquare, label: "Receive Goal", detail: "Agent understands the user's objective" },
      { icon: Brain, label: "Plan Actions", detail: "Agent breaks down goal into steps and strategies" },
      { icon: Zap, label: "Execute Tools", detail: "Agent calls APIs, searches, or runs code" },
      { icon: Eye, label: "Observe Results", detail: "Agent evaluates the outcome of each action" },
      { icon: Sparkles, label: "Iterate or Complete", detail: "Agent refines approach until goal is achieved" },
    ],
  },
];

export const InteractiveExplainers = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Explainers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click to expand and explore how each system works step by step.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {explainers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-primary transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-semibold">{item.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-4">
                      <div className="flex flex-col md:flex-row items-start gap-4">
                        {item.steps.map((step, stepIndex) => (
                          <motion.div
                            key={stepIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: stepIndex * 0.1 }}
                            className="flex-1 relative"
                          >
                            <div className="p-4 rounded-lg bg-muted/50 border border-border text-center h-full">
                              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-3">
                                <step.icon className="w-5 h-5" />
                              </div>
                              <h4 className="font-medium text-sm mb-1">{step.label}</h4>
                              <p className="text-xs text-muted-foreground">{step.detail}</p>
                            </div>
                            {stepIndex < item.steps.length - 1 && (
                              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                                <ArrowRight className="w-4 h-4 text-primary" />
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
