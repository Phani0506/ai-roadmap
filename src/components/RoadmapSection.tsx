import { motion } from "framer-motion";
import { RoadmapCard } from "./RoadmapCard";
import {
  Brain,
  Cpu,
  MessageSquare,
  Database,
  Search,
  Wrench,
  Bot,
  GitBranch,
  Layers,
  Rocket,
} from "lucide-react";

const roadmapData = [
  {
    title: "Foundations of AI & LLMs",
    description: "Understand the building blocks of artificial intelligence and how Large Language Models work at a high level.",
    difficulty: "Beginner" as const,
    learnings: [
      "What is AI, ML, and Deep Learning",
      "What are Large Language Models",
      "Tokens, embeddings, and inference basics",
    ],
    icon: Brain,
  },
  {
    title: "How LLMs Work Internally",
    description: "Dive deep into the architecture that powers modern language models and their inner workings.",
    difficulty: "Intermediate" as const,
    learnings: [
      "Transformers architecture explained",
      "Self-attention mechanism",
      "Training vs inference modes",
      "Context windows and limitations",
    ],
    icon: Cpu,
  },
  {
    title: "Prompt Engineering",
    description: "Master the art of communicating effectively with LLMs through carefully crafted prompts.",
    difficulty: "Beginner" as const,
    learnings: [
      "Zero-shot and few-shot prompting",
      "System vs user prompts",
      "Chain-of-thought techniques",
      "Prompt optimization strategies",
    ],
    icon: MessageSquare,
  },
  {
    title: "Embeddings & Vector Databases",
    description: "Learn how text becomes numbers and how to store and search through semantic meaning.",
    difficulty: "Intermediate" as const,
    learnings: [
      "What are embeddings and why they matter",
      "Similarity search fundamentals",
      "Vector databases conceptually",
      "When to use embeddings",
    ],
    icon: Database,
  },
  {
    title: "Retrieval Augmented Generation",
    description: "Combine retrieval and generation to build powerful knowledge-enhanced AI systems.",
    difficulty: "Intermediate" as const,
    learnings: [
      "What problem RAG solves",
      "RAG architecture deep dive",
      "Chunking strategies",
      "Common RAG pitfalls to avoid",
    ],
    icon: Search,
  },
  {
    title: "Tool Calling & Function Calling",
    description: "Enable LLMs to interact with the real world through tools and structured outputs.",
    difficulty: "Intermediate" as const,
    learnings: [
      "Why tools are essential for agents",
      "How LLMs call external tools",
      "Structured output techniques",
      "Real-world integration examples",
    ],
    icon: Wrench,
  },
  {
    title: "AI Agents",
    description: "Build autonomous systems that can reason, plan, and take actions to achieve goals.",
    difficulty: "Advanced" as const,
    learnings: [
      "What defines an AI Agent",
      "Agent vs LLM differences",
      "Memory, planning, and reasoning",
      "Single-agent system design",
    ],
    icon: Bot,
  },
  {
    title: "Agentic Workflows",
    description: "Design complex multi-agent systems that collaborate to solve challenging problems.",
    difficulty: "Advanced" as const,
    learnings: [
      "Multi-agent system patterns",
      "Planner → Executor → Critic flow",
      "Autonomous workflow design",
      "Human-in-the-loop integration",
    ],
    icon: GitBranch,
  },
  {
    title: "Orchestration & Frameworks",
    description: "Learn the tools and patterns for building production-ready agent systems.",
    difficulty: "Advanced" as const,
    learnings: [
      "Agent orchestration concepts",
      "Graph-based agent flows",
      "State machines for agents",
      "Framework selection guide",
    ],
    icon: Layers,
  },
  {
    title: "Real-World Applications",
    description: "Apply everything you've learned to build practical AI-powered applications.",
    difficulty: "Advanced" as const,
    learnings: [
      "Building intelligent chatbots",
      "Research and coding assistants",
      "Automation systems",
      "Production deployment",
    ],
    icon: Rocket,
  },
];

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Learning <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow this guided path from LLM fundamentals to building production-ready AI agents.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <RoadmapCard
                key={index}
                step={index + 1}
                {...item}
                isLeft={index % 2 === 0}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
