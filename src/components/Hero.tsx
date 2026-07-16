import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown, MessageSquare, Briefcase, Volume2 } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const roles = [
    "Software Engineering Student",
    "AI & Full-Stack Developer",
    "Machine Learning Learner",
    "React.js / Node.js Builder",
    "QA-Minded Problem Solver",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Parallax mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize values between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80); // steady typing speed

        if (currentText === fullText) {
          // Finished typing, hold for a bit
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40); // faster deleting

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300); // pause before starting next role
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] pt-20"
    >
      {/* Background Glows (Parallax responsive) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out z-0"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
        }}
      >
        {/* Soft violet radial glow */}
        <div className="absolute top-[20%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[120px]" />
        {/* Soft blue radial glow */}
        <div className="absolute bottom-[20%] right-[15%] w-[45vw] h-[45vw] rounded-full bg-blue-600/10 blur-[130px]" />
        {/* Tiny stars/nodes scatter */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e1e2f_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Social Icons fixed on the left (Desktop) */}
        <div className="hidden lg:flex flex-col gap-6 fixed left-10 top-1/2 -translate-y-1/2 z-30">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col gap-6 items-center"
          >
            <a
              href="https://github.com/zainablone30"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all p-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/zainabasif30"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all p-1"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:zasif9204@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all p-1"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent mt-2" />
          </motion.div>
        </div>

        {/* Hero Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col justify-center text-center md:text-left z-10"
        >
          {/* Tag */}
          <div className="inline-flex self-center md:self-start items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
              Islamabad based AI & Full-Stack Developer
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
            <span className="block opacity-90 text-gray-400 font-light text-3xl sm:text-4xl mb-2 font-sans tracking-wide">
              Hey, I'm
            </span>
            <span className="block bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
              Zainab Asif
            </span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="mt-4 h-12 flex items-center justify-center md:justify-start">
            <span className="font-mono text-lg sm:text-2xl text-purple-400 tracking-wider font-semibold">
              {currentText}
            </span>
            <span className="w-[3px] h-6 bg-blue-400 ml-1 animate-pulse" />
          </div>

          {/* Intro Text */}
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            I build practical AI-powered web applications with React.js, Node.js, MongoDB, and Python.
            My work blends full-stack engineering, machine learning fundamentals, and careful testing for reliable user-centered products.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] flex items-center gap-2 group hover:scale-[1.02] cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-purple-200" />
              View My Work
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-8 py-4 rounded-lg glass-panel text-purple-300 border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 font-semibold text-sm tracking-widest uppercase transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-purple-400" />
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Hero Right Media (Video Avatar / AI mockup with glow behind) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 flex justify-center items-center relative"
        >
          {/* Radial soft background glow behind the video */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_65%)] blur-2xl z-0 pointer-events-none" />

          {/* Interactive Frame / Ring */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1.5 bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-purple-500/40 border border-white/5 backdrop-blur-3xl shadow-[0_0_50px_rgba(124,58,237,0.15)] z-10 flex items-center justify-center">
            {/* Inner rotating gradient boundary */}
            <div className="absolute inset-0 rounded-full border border-dashed border-purple-500/30 animate-[spin_60s_linear_infinite]" />

            {/* Main Circle container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-black/40 relative group">
              {/* Clearly marked placeholder <video> tag as requested */}
              <VideoAvatar />

              {/* Decorative Scanline/Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 bg-purple-500/5 mix-blend-color-dodge pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-100 transition-all text-gray-500"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function VideoAvatar() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const tryPlayUnmuted = async () => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = true; // start muted so autoplay is allowed
      try {
        await v.play();
        // Try to unmute and play when permitted
        v.muted = false;
        await v.play();
        setSoundEnabled(true);
      } catch (err) {
        // Browser blocked autoplay with sound. Keep muted and show control.
        v.muted = true;
        setSoundEnabled(false);
      }
    };

    tryPlayUnmuted();
  }, []);

  const enableSound = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.muted = false;
      await v.play();
      setSoundEnabled(true);
    } catch (err) {
      console.warn("Could not enable sound:", err);
    }
  };

  return (
    <div className="w-full h-full relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => console.log('[VideoAvatar] loaded data')}
        onCanPlay={() => console.log('[VideoAvatar] can play')}
        onPlay={() => console.log('[VideoAvatar] playing')}
        onError={(e) => console.error('[VideoAvatar] error loading/playing', e)}
        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
      >
        {/* Place your file at public/avatar.mp4 */}
        <source src="/avatar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Icon-only sound button (no visible text) shown only when sound is disabled */}
      {!soundEnabled && (
        <button
          onClick={enableSound}
          className="absolute bottom-4 right-4 bg-purple-600/80 text-white p-2 rounded-full backdrop-blur-md shadow-lg flex items-center justify-center"
          aria-label="Enable voice"
          title="Enable voice"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
