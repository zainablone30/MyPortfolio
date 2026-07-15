/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-gray-100 overflow-hidden font-sans">
      {/* Premium custom cursor follow effect */}
      <CustomCursor />

      {/* Persistent top header navbar */}
      <Navbar />

      {/* Main content layers */}
      <main>
        {/* Full screen hero section */}
        <Hero />

        {/* Structured biographical details */}
        <About />

        {/* Technical stack grids & tilt animations */}
        <Skills />

        {/* Visual card showcase of premium builds */}
        <Projects />

        {/* Seamless inquiry contact form & copyright details */}
        <Contact />
      </main>
    </div>
  );
}

