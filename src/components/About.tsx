import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Code2, Users } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#0c0c14] relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Biography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-purple-500" />
              <span className="font-mono text-xs tracking-widest text-purple-400 uppercase">
                01. About Me
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
              Building AI-Ready <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Software
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-2">
              I am a Software Engineering student at Bahria University in Islamabad, focused on full-stack development, AI integration, and reliable web experiences. My strongest work sits at the intersection of React.js interfaces, Node.js APIs, MongoDB data models, and Python-based machine learning.
            </p>

            <p className="text-gray-400/80 text-sm sm:text-base leading-relaxed">
              Across projects like Dastarkhan AI, Autocamp, Evenza, and an AI-based healthcare system, I have built recommendation flows, authentication, booking workflows, REST APIs, responsive UI, and test cases for real product behavior. I also bring freelance Shopify experience, coordinating store updates, product listings, theme customization, and order workflows for a client-facing store.
            </p>

            <div className="flex gap-4 items-center mt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border border-[#0a0a0f] bg-purple-600/30 flex items-center justify-center font-mono text-xs text-white">AI</div>
                <div className="w-10 h-10 rounded-full border border-[#0a0a0f] bg-blue-600/30 flex items-center justify-center font-mono text-xs text-white">RE</div>
                <div className="w-10 h-10 rounded-full border border-[#0a0a0f] bg-indigo-600/30 flex items-center justify-center font-mono text-xs text-white">QA</div>
              </div>
              <span className="text-xs font-mono text-gray-500">AI, full-stack, and QA-minded development</span>
            </div>
          </motion.div>

          {/* Right Column: Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Stat 1 */}
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col gap-4 relative group">
              <div className="p-3 bg-purple-500/10 rounded-xl w-12 h-12 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <Counter value={27} suffix="+" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">
                  Microsoft Learn Badges
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col gap-4 relative group">
              <div className="p-3 bg-blue-500/10 rounded-xl w-12 h-12 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <Counter value={5} suffix="+" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">
                  Featured Projects
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col gap-4 relative group sm:col-span-2">
              <div className="p-3 bg-purple-500/10 rounded-xl w-12 h-12 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <Counter value={100} suffix="+" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">
                  Hackathon Teams Competed Against
                </span>
              </div>
            </div>

            {/* Mini tagline inside cards */}
            <div className="sm:col-span-2 glass-panel p-4 rounded-xl flex items-center justify-center gap-3 border-dashed border-purple-500/20 bg-purple-500/5">
              <Award className="w-4 h-4 text-purple-400 animate-bounce" />
              <span className="text-xs font-mono text-purple-300">
                AI Hackathon 4th place - top 4% across 25+ universities
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
