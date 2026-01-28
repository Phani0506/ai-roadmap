import { motion } from "framer-motion";

const keywords = [
  "LLMs",
  "Prompt Engineering",
  "RAG",
  "Attention",
  "Agents",
  "Tools",
  "Workflows",
  "Embeddings",
  "Transformers",
  "Vector DBs",
];

export const Marquee = () => {
  return (
    <div className="relative overflow-hidden py-4 border-y border-border/50">
      <div className="flex animate-marquee">
        {[...keywords, ...keywords, ...keywords, ...keywords].map((keyword, index) => (
          <span
            key={index}
            className="mx-8 text-lg font-medium text-muted-foreground whitespace-nowrap"
          >
            <span className="gradient-text">{keyword}</span>
            <span className="mx-8 text-primary/50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};
