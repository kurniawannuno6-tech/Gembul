"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden rounded-full group transition-all duration-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 focus:ring-4 focus:ring-pink-200",
        gold: "bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 focus:ring-4 focus:ring-pink-200",
        outline: "bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 focus:ring-4 focus:ring-pink-200",
        secondary: "bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 focus:ring-4 focus:ring-pink-200",
        ghost: "bg-transparent text-[var(--color-dark)] hover:bg-[rgba(26,22,16,0.04)]",
        link: "bg-transparent text-[var(--color-dark)]",
        goldOutline: "bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 focus:ring-4 focus:ring-pink-200",
        creamOutline: "bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 focus:ring-4 focus:ring-pink-200",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const innerSpanVariants = cva(
  "relative transition-all ease-in duration-75 rounded-full inline-flex items-center justify-center font-bold tracking-[0.15em] uppercase select-none",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-cream)] text-[var(--color-dark)] group-hover:bg-transparent group-hover:text-white",
        gold: "bg-[var(--color-cream)] text-[var(--color-dark)] group-hover:bg-transparent group-hover:text-white",
        outline: "bg-[var(--color-cream)] text-[var(--color-dark)] group-hover:bg-transparent group-hover:text-white",
        secondary: "bg-[var(--color-cream)] text-[var(--color-dark)] group-hover:bg-transparent group-hover:text-white",
        ghost: "bg-transparent text-[var(--color-dark)]",
        link: "bg-transparent text-[var(--color-dark)] underline-offset-4 hover:underline",
        goldOutline: "bg-[var(--color-cream)] text-[var(--color-dark)] group-hover:bg-transparent group-hover:text-white",
        creamOutline: "bg-[var(--color-dark)] text-[var(--color-cream)] group-hover:bg-transparent group-hover:text-white",
      },
      size: {
        default: "text-[0.72rem] py-4 px-8 md:px-12 leading-none",
        sm: "text-[0.63rem] py-2.5 px-6 md:px-10 leading-none",
        lg: "text-[0.85rem] py-5 px-10 md:px-16 leading-none",
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
  extends Omit<HTMLMotionProps<"button">, "ref" | "children">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  hoverScale?: number;
  tapScale?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, hoverScale = 1.05, tapScale = 0.95, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        <span className={cn(innerSpanVariants({ variant, size }))}>
          {children}
        </span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
