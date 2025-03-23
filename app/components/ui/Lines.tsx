"use client";
import { motion } from "motion/react";

function Lines({totalLines = 9}:{totalLines:number}) {
  const duration = 0.5;
  const SvgHeight = totalLines * 10 + 7;
  return (
    <div>
      <svg width="100" height={SvgHeight} viewBox={`0 0 10 ${SvgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          {Array.from({ length: totalLines }).map((_, index) => (
            <motion.line
              key={index}
              x1="5"
              y1={index * 11}
              x2="5"
              y2={index * 11 + 8}
              strokeWidth="2"
              stroke="rgba(255,255,255,2)" // Default color
              animate={{
                stroke: "rgba(255,255,255,0.3)"
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatDelay: duration * (totalLines - 1),
                ease: "linear",
                delay: index * duration // Staggered delay
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default Lines;
