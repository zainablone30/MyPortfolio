import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
    title: "Nexus DeFi Terminal",
    description: "A premium, real-time trading interface and analytics panel for advanced decentralized liquidity providers with instant telemetry metrics and canvas charting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYUjIu4j25_s-gKQhC8RYYSmb1g_ElQEhAVYax7Neh13aeerErQHH45cgbK0e8sTela_PckIQ6KU2NlN5qbifO29CE-5_ViIuNg4lF0Lh8Zx5TOopBBM7nSDcGp46LXMkg1UMerZdyv2GAIZuCt6juxhzXUwwldciTNNb5JC7evYc_I8odrNoU8nNN3SfpQ2QsJC4LPxHIyPWhAd04xoeroM_uN5BjIJX7fwHzQnXSsPLISWyhaNwYSgq4HdP1syf6-Uf3FaNBmA",
    tags: ["Next.js", "WebGL", "TypeScript", "TailwindCSS"],
    liveLink: "https://github.com",
    gitLink: "https://github.com"
  },
  {
    title: "EcoVoyage Planner",
    description: "An innovative mobile-first travel itinerary and carbon offset optimization suite with highly polished micro-interactions and interactive global map plotting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6cehmswANVY408TKWRcT7WOnagQKw9x4DWM3FM3iJcatsfYTFUU4pTOvLOE-Y9nT6FVeh0A7A5RRMLiMOUgYAO11sDnJittCeX4uYCpSx6nnRweFIsKHAdXl57h-auKhACY3qyNURswkgH-3YihXKHBjNQGtOoTmDuzw5laoXGRbs-tUH3-HzhF0IvbA-r5yvbot73Dt24BpxfsGFuU_zRGXwmYPqdE1NwcpxES_Nb77tZnnHM6mVY0c9q9d4UNh7Kx1jfXAwIw",
    tags: ["React Native", "Node.js", "GraphQL", "Framer Motion"],
    liveLink: "https://github.com",
    gitLink: "https://github.com"
  },
  {
    title: "Vanguard Couture",
    description: "A sophisticated headless commerce storefront for a high-end conceptual fashion brand, featuring smooth custom-curated viewports and seamless checkout flows.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlWo0U-QAUDtTxgTB59ZNPh-AMPNZhCkNZ4hiBUv5QZdUzSiGnyeN68vQrRcVa6vsvgqkENbcLiiu4lknoSAnugDc0egc5TNyI7hJon-f4wIZ_W-UQhhd6nFs-DctNzpgB9IKzrmpYCFnsLILVWjxIEjaj2NC_tp6V9SBDJmWPc1ibM5rQrWTm-UfhL6iTN61WtfDpT7x3uyyCz87LmzFX7pwuvE11D-o8V4afo3WQOslEOtG9Ok57fskbkYnGTiptWOGx-r6QHg",
    tags: ["Shopify Graph", "React", "TailwindCSS", "Vite"],
    liveLink: "https://github.com",
    gitLink: "https://github.com"
  },
  {
    title: "Orion Cloud Console",
    description: "Enterprise-grade cloud management and edge server orchestration dashboard featuring immediate node state maps and sub-millisecond status logging.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBEI29Z5a8cx7e2Jxu2ZtUhuD1FRSJaDAdJUQPok2PEDS6Sk2kpUW5YMKiojce955ibOaRDS2aXczMtuA9Bfer6tEYb-CFP8RZcEdELSMPxJlGej89eGrXH6QhmMj4E-vGj5IPIMZFWrhHFlQUY4qUGtft6yad3NmoC4HHxV3-nrMiZ6vGwVcPS6a0pXm7ZuUr9iieVem2QVqZ1Izimhv8_1iWLJxWleK0iZ-u3e37Q_soXAx7J40xUBjRdzNa1OEDSvcB-B_Efw",
    tags: ["React", "Rust API", "Docker", "TailwindCSS"],
    liveLink: "https://github.com",
    gitLink: "https://github.com"
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
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Ventures</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
              A meticulously curated selection of my most impactful digital builds and software deployments.
            </p>
          </div>

          <motion.a
            href="https://github.com"
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
