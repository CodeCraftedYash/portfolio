'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

type BorderAnimationProps = {
  children?: ReactNode;
  className?: string;
};

export default function BorderAnimation({ children, className }: BorderAnimationProps) {
/*   const sideVariants = {
    top: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
    bottom: { x: 0, y: 0 },
    left: { x: 0, y: 0 },
  }; */

  return (
    <div className={`relative inline-block rounded-xl ${className}`}>
      {/* Animated Borders */}
      <motion.span
        className="absolute top-0 left-0 w-full h-0.5 bg-black rounded-full"
        animate={{ opacity: [1, 0.3, 0.3, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <motion.span
        className="absolute top-0 right-0 h-full w-0.5 bg-black rounded-full"
        animate={{ opacity: [0.3, 1, 0.3, 0.3, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full"
        animate={{ opacity: [0.3, 0.3, 1, 0.3, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <motion.span
        className="absolute top-0 left-0 h-full w-0.5 bg-black rounded-full"
        animate={{ opacity: [0.3, 0.3, 0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <div className="relative z-10 p-4">{children}</div>
    </div>
  );
}
