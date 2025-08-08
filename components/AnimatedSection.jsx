// components/AnimatedSection.jsx
"use client"; // This component uses client-side hooks

import { motion } from 'framer-motion';

// This is a reusable component that will animate its children
export default function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true }} // Only animate once when it enters the viewport
      transition={{ duration: 0.8, ease: "easeOut" }} // Set the animation speed and style
    >
      {children}
    </motion.div>
  );
}