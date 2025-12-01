"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animation for the "lag" effect
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target or its parent is clickable (button, link, etc.)
      const isClickable = target.closest("a, button, [role='button']");
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseEnter);
    // We listen to mouseover to detect hover on new elements
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-luxury-gold rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(212, 175, 55, 0.1)" : "transparent",
        borderColor: isHovering ? "rgba(212, 175, 55, 0.5)" : "#D4AF37",
      }}
      transition={{
        scale: { duration: 0.2 },
        backgroundColor: { duration: 0.2 },
      }}
    >
        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-luxury-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}

