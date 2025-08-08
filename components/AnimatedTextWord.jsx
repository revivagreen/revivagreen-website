// components/AnimatedTextWord.jsx
"use client"; // This is a client component because it uses Framer Motion.

import { motion } from 'framer-motion';

// This object defines the animation for the container (the whole heading)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Animates each word 0.08s after the last
    },
  },
};

// This object defines the animation for each individual word
const childVariants = {
  hidden: {
    opacity: 0,
    y: 20, // Start 20px below its final position
  },
  visible: {
    opacity: 1,
    y: 0, // Animate to its final position
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AnimatedTextWord({ text, className }) {
  // Split the input text into an array of words
  const words = text.split(" ");

  return (
    // We use motion.h2 as the container for the animation
    <motion.h2
      className={className} // Pass the original styling
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation on scroll
      viewport={{ once: true }} // Animate only once
    >
      {words.map((word, index) => (
        // Each word is wrapped in a motion.span to be animated individually
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: 'inline-block', marginRight: '0.4em' }} // Add space between words
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}