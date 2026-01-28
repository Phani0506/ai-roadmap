import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Wrench, ArrowRight } from "lucide-react";

const content = {
  beginner: {
    title: "What is an LLM?",
    description: "Think of an LLM as a super smart autocomplete. It's been trained on billions of words from the internet, so it learned patterns in how humans write and communicate. When you give it some text, it predicts what should come next, word by word.",
    example: "Like when your phone suggests the next word as you type - but way more powerful!",
    keyPoints: [
      "LLMs predict the next word based on patterns",
      "They're trained on huge amounts of text data",
      "They don't actually 'understand' - they're pattern matchers",
      "The more context you give, the better the output",
    ],
  },
  builder: {
    title: "Large Language Models Architecture",
    description: "LLMs are transformer-based neural networks trained with self-supervised learning on massive text corpora. They use multi-head attention mechanisms to capture long-range dependencies and positional encodings to understand token sequence order.",
    example: "Architecture: Embedding Layer → N × (Multi-Head Attention → Feed Forward) → Output Layer",
    keyPoints: [
      "Attention mechanism: Q·K^T / √d_k → softmax → V",
      "Context window limits (4K-128K tokens typically)",
      "Temperature controls output randomness (0-2)",
      "Token probability distribution via softmax",
    ],
  },
};

export const LearningModeSection = () => {
  const [mode, setMode] = useState<"beginner" | "builder">("beginner");
  const currentContent = content[mode];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="gradient-text">Mode</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Switch between beginner-friendly explanations and technical deep dives.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 rounded-lg bg-card border border-border">
            <button
              onClick={() => setMode("beginner")}
              className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                mode === "beginner"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Beginner Mode
            </button>
            <button
              onClick={() => setMode("builder")}
              className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                mode === "builder"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Wrench className="w-5 h-5" />
              Builder Mode
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-4">{currentContent.title}</h3>
              <p className="text-muted-foreground mb-6">{currentContent.description}</p>
              
              <div className="p-4 rounded-lg bg-muted/50 border border-border mb-6 font-mono text-sm">
                {currentContent.example}
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Key Points
                </h4>
                {currentContent.keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
