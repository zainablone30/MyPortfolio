import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import dastarkhanImage from "../assets/dastarkhan-ai.png";
import autocampImage from "../assets/autocamp.png";
import healthcareImage from "../assets/healthcare.jpeg";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  gitLink: string;
}

const projectsList: Project[] = [
  {
    title: "Dastarkhan AI",
    description: "An AI-powered smart food assistance platform with personalized meal recommendations based on dietary preferences, behavior patterns, nutritional data, and real-time full-stack data flow.",
    image: dastarkhanImage,
    tags: ["React.js", "Node.js", "MongoDB", "Python ML"],
    liveLink: "https://www.dastarkhan.app/",
    gitLink: "https://github.com/zainablone30"
  },
  {
    title: "Autocamp",
    description: "An AI-powered automated camping and outdoor experience platform that recommends campsites, gear, routes, and activities using user preferences, environmental data, and external APIs.",
    image: autocampImage,
    tags: ["React.js", "Express.js", "REST APIs", "AI"],
    liveLink: "https://github.com/zainablone30",
    gitLink: "https://github.com/zainablone30"
  },
  {
    title: "Evenza",
    description: "A full-stack event management web app for university societies with authentication, event registration, booking, payment proof submission, admin approvals, and manual QA test coverage.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlWo0U-QAUDtTxgTB59ZNPh-AMPNZhCkNZ4hiBUv5QZdUzSiGnyeN68vQrRcVa6vsvgqkENbcLiiu4lknoSAnugDc0egc5TNyI7hJon-f4wIZ_W-UQhhd6nFs-DctNzpgB9IKzrmpYCFnsLILVWjxIEjaj2NC_tp6V9SBDJmWPc1ibM5rQrWTm-UfhL6iTN61WtfDpT7x3uyyCz87LmzFX7pwuvE11D-o8V4afo3WQOslEOtG9Ok57fskbkYnGTiptWOGx-r6QHg",
    tags: ["React.js", "Node.js", "MongoDB", "QA"],
    liveLink: "https://github.com/zainablone30",
    gitLink: "https://github.com/zainablone30"
  },
  {
    title: "AI-Based Healthcare System",
    description: "A machine learning healthcare project for symptom-based disease prediction, including preprocessing, feature engineering, iterative model optimization, and an interactive insights interface.",
    image: healthcareImage,
    tags: ["Python", "Machine Learning", "Data Preprocessing", "Healthcare"],
    liveLink: "https://github.com/zainablone30",
    gitLink: "https://github.com/zainablone30"
  },
  {
    title: "Bank & ATM Management System",
    description: "A secure banking system with CRUD operations, deposits, withdrawals, transfers, input validation, and data-structure-backed search and sorting using arrays, linked lists, and queues.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYUjIu4j25_s-gKQhC8RYYSmb1g_ElQEhAVYax7Neh13aeerErQHH45cgbK0e8sTela_PckIQ6KU2NlN5qbifO29CE-5_ViIuNg4lF0Lh8Zx5TOopBBM7nSDcGp46LXMkg1UMerZdyv2GAIZuCt6juxhzXUwwldciTNNb5JC7evYc_I8odrNoU8nNN3SfpQ2QsJC4LPxHIyPWhAd04xoeroM_uN5BjIJX7fwHzQnXSsPLISWyhaNwYSgq4HdP1syf6-Uf3FaNBmA",
    tags: ["Java", "C++", "CRUD", "Data Structures"],
    liveLink: "https://github.com/zainablone30",
    gitLink: "https://github.com/zainablone30"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-[#0c0c14] relative overflow-hidden"
    >
      {/* Background visual element */}
      <div className="absolute top-0 right-[10%] w-[350px] h-[350px] bg-purple-900/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section with link to archive */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-purple-500" />
              <span className="font-mono text-xs tracking-widest text-purple-400 uppercase">
                03. Showcase
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
              A focused selection of AI, full-stack, QA, and data-structure projects drawn from my Software Engineering work.
            </p>
          </div>

          <motion.a
            href="https://github.com/zainablone30"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-mono text-xs uppercase tracking-widest font-bold group"
          >
            View Full Archive 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Projects Responsive Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 bg-[#12121a]/30 hover:border-purple-500/25 transition-colors duration-300"
            >
              {/* Image Container with Zoom effect on Hover */}
              <div className="relative aspect-video overflow-hidden bg-purple-950/10">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay Gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute inset-0 bg-purple-950/10 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Text details / Footer of card */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow gap-4">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-purple-500/5 border border-purple-500/10 text-[10px] font-mono text-purple-300 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-purple-300 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Actions (Demo & GitHub) */}
                <div className="flex gap-4 pt-2 border-t border-white/5 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
