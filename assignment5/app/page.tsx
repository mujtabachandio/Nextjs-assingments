"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section className="hero text-center">
        {/* Animated Header */}
        <motion.h1
          className="text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm Mujtaba Chandio
        </motion.h1>

        {/* Updated Subheading */}
        <motion.p
          className="text-xl max-w-2xl mx-auto mb-12 text-gray-400 leading-relaxed"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm a Python programmer with a passion for building powerful applications, data-driven solutions, and working with AI and machine learning. Let's build something amazing together.
        </motion.p>

        {/* Animated Call-to-Action Button */}
        <motion.div
          className="space-y-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/projects">
            <Button className="px-8 py-3 text-lg bg-orange-500 hover:bg-orange-800 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out">
              View My Projects
            </Button>
          </Link>

          <Link href="/contact">
            <Button className="px-8 py-3 text-lg bg-transparent border border-orange-500 hover:bg-orange-500 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
