"use client"

import {motion} from "motion/react"
import { ArrowDown } from "lucide-react"

const NAME = "Ankit Jha"
const ROLE = "AI/ML Developer"
const TAGLINE = "I build machine learning models, LLM apps, and AI agents."

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Hi, I&apos;m {NAME}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl font-medium text-primary sm:text-2xl"
        >
          {ROLE}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          {TAGLINE}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-muted"
          >
            Contact me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}