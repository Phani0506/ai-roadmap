import { motion } from "framer-motion";
import { CheckCircle2, LucideIcon } from "lucide-react";

interface RoadmapCardProps {
  step: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  learnings: string[];
  icon: LucideIcon;
  isLeft: boolean;
  delay: number;
}

const difficultyColors = {
  Beginner: "bg-accent/20 text-accent border-accent/30",
  Intermediate: "bg-secondary/20 text-secondary border-secondary/30",
  Advanced: "bg-primary/20 text-primary border-primary/30",
};

export const RoadmapCard = ({
  step,
  title,
  description,
  difficulty,
  learnings,
  icon: Icon,
  isLeft,
  delay,
}: RoadmapCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="flex-1 group"
      >
        <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover gradient-border">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-primary transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-muted-foreground">
                  Step {step.toString().padStart(2, "0")}
                </span>
                <span
                  className={`px-2 py-0.5 text-xs font-medium rounded-full border ${difficultyColors[difficulty]}`}
                >
                  {difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What you'll learn
            </span>
            <ul className="space-y-1.5">
              {learnings.map((learning, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  {learning}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: "spring" }}
        className="relative z-10 shrink-0"
      >
        <div className="w-4 h-4 rounded-full bg-primary glow-primary" />
        <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-pulse opacity-50" />
      </motion.div>

      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
};
