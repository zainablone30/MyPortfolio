import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate database/API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Dynamic ambient background glows */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-px bg-purple-500" />
            <span className="font-mono text-xs tracking-widest text-purple-400 uppercase">
              04. Get In Touch
            </span>
            <span className="w-8 h-px bg-purple-500" />
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Start a <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Project</span>
          </h2>
          
          <p className="mt-4 text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Open to internships, junior software engineering roles, AI/full-stack projects, QA collaborations, and selective freelance work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info & social details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8 lg:pr-8"
          >
            <h3 className="font-display font-bold text-2xl text-white">
              Let's build useful software together.
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Have an AI-powered product idea, a full-stack build, a QA workflow, or a student collaboration opportunity? Send the details and I will get back to you.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              <div className="flex items-center gap-4 text-gray-400 hover:text-purple-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-gray-500 tracking-wider">Direct Email</span>
                  <a href="mailto:zasif9204@gmail.com" className="text-sm font-semibold">zasif9204@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400 hover:text-purple-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-gray-500 tracking-wider">Headquarters</span>
                  <span className="text-sm font-semibold">Islamabad, Pakistan</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-purple-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-gray-500 tracking-wider">Phone</span>
                  <a href="tel:+923118884288" className="text-sm font-semibold">+92 311 8884288</a>
                </div>
              </div>
            </div>

            {/* Repeated Social Links on bottom left contact */}
            <div className="flex flex-col gap-3 mt-6">
              <span className="font-mono text-[10px] uppercase text-gray-500 tracking-widest font-bold">Find me on the grid</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/zainablone30"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/zainabasif30"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:zasif9204@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-2xl relative">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-display font-extrabold text-2xl text-white">Transmission Received</h4>
                      <p className="text-gray-400 text-sm max-w-sm">
                        Thank you for reaching out! I have received your message and will coordinate a reply soon.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-purple-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-mono text-[10px] uppercase text-gray-500 tracking-widest font-semibold">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="px-4 py-3 bg-black/30 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 focus:outline-none transition-all text-sm text-white font-sans"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-mono text-[10px] uppercase text-gray-500 tracking-widest font-semibold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="px-4 py-3 bg-black/30 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 focus:outline-none transition-all text-sm text-white font-sans"
                        />
                      </div>
                    </div>

                    {/* Message body */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-mono text-[10px] uppercase text-gray-500 tracking-widest font-semibold">
                        Message details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about the role, project, collaboration, timeline, and deliverables..."
                        rows={5}
                        className="px-4 py-3 bg-black/30 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 focus:outline-none transition-all text-sm text-white font-sans resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-400 font-mono">
                        Error: Please fill out all required fields.
                      </p>
                    )}

                    {/* Submit action */}
                    <div className="mt-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                      >
                        {status === "submitting" ? (
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-purple-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Launch Inquiry
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Embedded footer inside contact view for flawless structural layout */}
      <footer className="mt-24 sm:mt-32 pt-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <span className="font-display font-extrabold text-lg tracking-widest text-white">Zainab_Asif</span>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
              Copyright 2026 Zainab_Asif. ALL RIGHTS RESERVED.
            </span>
          </div>

          <div className="flex flex-wrap gap-6 items-center justify-center text-xs font-mono text-gray-500 uppercase tracking-wider">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          </div>

          <div className="flex gap-2 items-center text-[10px] font-mono text-gray-600">
            <Sparkles className="w-3.5 h-3.5 text-purple-500/60 animate-pulse" />
            BUILT WITH AI, FULL-STACK, AND QA FOCUS
          </div>
        </div>
      </footer>
    </section>
  );
}
