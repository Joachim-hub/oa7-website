"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-4xl font-semibold tracking-tight text-secondary-0 md:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-secondary-500">{label}</p>
    </motion.div>
  );
}
