import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, Code } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-md border-b border-purple-500/10 py-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="font-display font-bold text-lg tracking-widest text-white flex items-center gap-2 group cursor-pointer"
        >
          <Code className="w-5 h-5 text-purple-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-all">
            Zainab_Asif
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-1 ${
                activeSection === item.id
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Console / Code icons (Aesthetic) */}
        <div className="hidden md:flex items-center gap-4 text-purple-400/80">
          <Terminal className="w-4 h-4 hover:text-purple-400 cursor-pointer" />
          <div className="w-px h-4 bg-gray-800" />
          <span className="font-mono text-xs text-gray-500 select-none">v1.2.0</span>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50 p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-purple-500/10 py-6 px-8 flex flex-col gap-5 z-30 md:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-lg font-medium py-1 border-b border-gray-900/50 ${
                  activeSection === item.id
                    ? "text-purple-400 pl-2 border-l-2 border-l-purple-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-800">
              <span className="font-mono text-xs text-gray-500">Zainab_Asif // BUILD v1.2.0</span>
              <div className="flex gap-3 text-purple-400">
                <Terminal className="w-4 h-4" />
                <Code className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
