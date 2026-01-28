import { motion } from "framer-motion";
import { Rocket, RefreshCw, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToRoadmap = () => {
    document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex p-4 rounded-full bg-primary/10 mb-8"
          >
            <Sparkles className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            You don't need to know{" "}
            <span className="gradient-text">everything</span>.
          </h2>
          <p className="text-2xl text-muted-foreground mb-4">
            Just start.
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            The best way to learn is by building. Pick any topic from the roadmap
            and start exploring. Every expert was once a beginner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToRoadmap}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-lg font-semibold text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-primary flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Restart Roadmap
            </motion.button>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-lg font-semibold text-lg border border-primary/50 bg-card/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Build Your First Agent
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
