"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Fixed (non-random) coordinates so server and client render identically.
// The bright trace draws the numeral "7" — a quiet nod to the OA7 name.
// The dim nodes/lines around it read as a wider signal/coordinate network.
const PRIMARY_PATH = "M 460 150 L 760 150 L 560 610";

const NETWORK_NODES: [number, number][] = [
  [180, 220], [260, 380], [140, 500], [320, 560], [420, 260],
  [880, 200], [960, 340], [860, 480], [1020, 520], [780, 600],
  [620, 90], [980, 120], [200, 130], [1060, 400],
];

const NETWORK_LINES: [number, number, number, number][] = [
  [180, 220, 260, 380], [260, 380, 140, 500], [140, 500, 320, 560],
  [260, 380, 420, 260], [420, 260, 620, 90], [880, 200, 960, 340],
  [960, 340, 860, 480], [860, 480, 1020, 520], [1020, 520, 780, 600],
  [980, 120, 880, 200], [200, 130, 180, 220], [1060, 400, 960, 340],
];

export function SignalField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 720"
      fill="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      {NETWORK_LINES.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(226,232,240,0.14)"
          strokeWidth="1"
        />
      ))}

      {NETWORK_NODES.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="#E2E8F0"
          fillOpacity="0.35"
          className="animate-pulse-node"
          style={{ animationDelay: `${(i % 6) * 0.5}s` }}
        />
      ))}

      <motion.path
        d={PRIMARY_PATH}
        stroke="#00F0FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        style={{ filter: "drop-shadow(0 0 6px rgba(0,240,255,0.6))" }}
      />
      <motion.circle
        r="4"
        fill="#00F0FF"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
        style={{ filter: "drop-shadow(0 0 8px rgba(0,240,255,0.8))" }}
        cx={560}
        cy={610}
      />
    </svg>
  );
}
