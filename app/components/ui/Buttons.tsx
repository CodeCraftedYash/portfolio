"use client";
import { type ButtonProps } from "@/app/types/ButtonType";
import React from "react";
import { motion } from "motion/react";
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  onClick,
  className = "",
  children,
}) => {
  const baseStyles =
    "rounded-2xl font-semibold shadow-md select-none border-2 border-[var(--background)]";

  const variantStyles =
    variant === "primary"
      ? "px-3 py-2 text-sm sm:text-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white"
      : "px-2 py-1 text-sm sm:text-base bg-gradient-to-r from-gray-300 to-gray-200 text-black";

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;