"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Combine framer-motion props with our custom variant props
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-luxury-gold text-luxury-black hover:bg-luxury-champagne",
      outline: "border border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10",
      ghost: "text-luxury-white hover:text-luxury-gold",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-none font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-luxury-gold disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
