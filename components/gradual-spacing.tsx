"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  onceInView?: boolean; // 🔹 Novo parâmetro para definir se anima só uma vez
}

function GradualSpacing({
  text,
  duration = 0.9,
  delayMultiple = 0.05,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  onceInView = false, // 🔹 Padrão: false (anima sempre que aparecer na tela)
}: GradualSpacingProps) {
  return (
    <span className="inline-flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className={cn("drop-shadow-sm", className)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: onceInView, amount: 0.1 }} // 🔹 Controlado pelo prop
          variants={framerProps}
          transition={{ duration, delay: i * delayMultiple, ease: "easeOut" }}
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.span>
      ))}
    </span>
  );
}

export { GradualSpacing };
