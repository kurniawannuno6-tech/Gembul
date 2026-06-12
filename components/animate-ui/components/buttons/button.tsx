"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold tracking-[0.15em] uppercase rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-dark)] text-white border border-[var(--color-dark)] hover:bg-transparent hover:text-[var(--color-dark)] transition-all duration-300",
        gold: "bg-[var(--color-gold)] text-[var(--color-dark)] border border-[var(--color-gold)] hover:bg-transparent hover:text-[var(--color-gold)] transition-all duration-300",
        outline: "bg-transparent text-[var(--color-dark)] border border-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white transition-all duration-300",
        secondary: "bg-transparent text-[var(--color-dark)] border border-[rgba(26,22,16,0.22)] hover:bg-[rgba(26,22,16,0.04)] transition-all duration-300",
        ghost: "bg-transparent text-[var(--color-dark)] hover:bg-[rgba(26,22,16,0.04)] transition-all duration-300",
        link: "text-[var(--color-dark)] underline-offset-4 hover:underline transition-all duration-300",
        goldOutline: "bg-transparent border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] transition-all duration-300",
        creamOutline: "bg-transparent border border-[rgba(184,150,90,0.3)] text-[var(--color-cream)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300",
      },
      size: {
        default: "text-[0.72rem] py-3.5 px-6 leading-none",
        sm: "text-[0.63rem] py-2 px-5 leading-none",
        lg: "text-[0.85rem] py-4 px-8 leading-none",
        icon: "h-9 w-9 rounded-full p-0 flex items-center justify-center leading-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {
  hoverScale?: number;
  tapScale?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, hoverScale = 1.05, tapScale = 0.95, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
