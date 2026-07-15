import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  // Secondary springs for the small immediate dot — always created to keep
  // Hook call order consistent between renders.
  const smallDotXSpring = useSpring(cursorX, { damping: 15, stiffness: 400 });
  const smallDotYSpring = useSpring(cursorY, { damping: 15, stiffness: 400 });

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dynamic follower dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500/50 pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Tiny immediate dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{
          x: smallDotXSpring,
          y: smallDotYSpring,
          // Adjust center offset
          translateX: 12,
          translateY: 12,
        }}
      />
    </>
  );
}
