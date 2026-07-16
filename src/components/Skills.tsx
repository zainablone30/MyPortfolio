import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Layers,
  Palette,
  FileCode,
  ShieldCheck,
  Server,
  Wind,
  PenTool,
  GitBranch,
  Cpu,
  Zap,
  Globe2
} from "lucide-react";

interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "AI/ML" | "Data" | "Tools";
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  level: string;
}

const skillsList: Skill[] = [
  { name: "React.js", category: "Frontend", icon: Code2, color: "from-blue-400 to-cyan-500", level: "92%" },
  { name: "JavaScript", category: "Frontend", icon: FileCode, color: "from-yellow-400 to-amber-500", level: "90%" },
  { name: "HTML5 / CSS3", category: "Frontend", icon: Layers, color: "from-orange-400 to-red-500", level: "90%" },
  { name: "Responsive UI/UX", category: "Frontend", icon: Palette, color: "from-pink-400 to-rose-500", level: "88%" },
  { name: "Node.js", category: "Backend", icon: Server, color: "from-green-400 to-emerald-600", level: "86%" },
  { name: "Express.js APIs", category: "Backend", icon: Cpu, color: "from-purple-500 to-indigo-500", level: "86%" },
  { name: "MongoDB", category: "Data", icon: Globe2, color: "from-emerald-400 to-teal-600", level: "84%" },
  { name: "MySQL / SQL", category: "Data", icon: ShieldCheck, color: "from-blue-500 to-indigo-600", level: "82%" },
  { name: "Python", category: "AI/ML", icon: Zap, color: "from-purple-400 to-pink-500", level: "86%" },
  { name: "NLP with PyTorch", category: "AI/ML", icon: Wind, color: "from-cyan-400 to-teal-500", level: "78%" },
  { name: "Azure ML / Cosmos DB", category: "AI/ML", icon: PenTool, color: "from-sky-400 to-blue-600", level: "80%" },
  { name: "Git / GitHub", category: "Tools", icon: GitBranch, color: "from-orange-500 to-red-600", level: "88%" }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Skill Card Subcomponent with 3D Tilt Effect
  const TiltCard = ({ skill, index }: { skill: Skill; index: number; key?: string }) => {
    const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
    const cardRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const loggedRef = useRef(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate within the element
      const y = e.clientY - rect.top;  // y coordinate within the element

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (centerY - y) / 8; // Max 10 deg rotation
      const rotateY = (x - centerX) / 8;

      setTiltStyle({
        transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
        boxShadow: "0 15px 35px -10px rgba(124, 58, 237, 0.2)"
      });

      // One-time debug log to capture computed styles and the element under the cursor
      try {
        if (!loggedRef.current) {
          const cardEl = cardRef.current || card;
          const overlayEl = overlayRef.current;
          const top = document.elementFromPoint(e.clientX, e.clientY) as Element | null;
          console.log("[SKILL-HOVER]", skill.name, {
            cardComputed: cardEl ? getComputedStyle(cardEl) : null,
            overlayComputed: overlayEl ? getComputedStyle(overlayEl) : null,
            topElement: top,
            topComputed: top ? getComputedStyle(top as Element) : null
          });
          loggedRef.current = true;
        }
      } catch (err) {
        console.warn("Hover logger error", err);
      }
    };

    const handleMouseLeave = () => {
      setTiltStyle({
        transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
        boxShadow: "none"
      });
      loggedRef.current = false;
    };

    const IconComponent = skill.icon;

    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setHoveredIndex(index)}
        ref={cardRef}
        style={tiltStyle}
        className="glass-panel p-6 rounded-2xl flex flex-col gap-4 relative group cursor-default select-none border border-white/5 transition-all duration-200 z-50"
      >
        {/* Glow Background effect on card hover */}
        <div ref={overlayRef} className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 pointer-events-none`} />

        {/* Header / Icon */}
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            {skill.category}
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col mt-2">
          <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
            {skill.name}
          </h3>
          <div className="flex items-center gap-2 mt-2 w-full">
            <div className="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${skill.color}`}
              />
            </div>
            <span className="text-[10px] font-mono text-gray-400">{skill.level}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-px bg-purple-500" />
            <span className="font-mono text-xs tracking-widest text-purple-400 uppercase">
              02. Abilities
            </span>
            <span className="w-8 h-px bg-purple-500" />
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          
          <p className="mt-4 text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            A practical stack shaped by software engineering coursework, AI projects, REST API development, database design, and hands-on QA workflows.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillsList.map((skill, index) => (
            <TiltCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
