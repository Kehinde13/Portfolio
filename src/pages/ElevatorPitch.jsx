'use client';

import { motion } from 'framer-motion';

export default function ElevatorPitch() {
  return (
    <div className="text-center min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0"></div>

      <motion.section
        className="relative max-w-3xl mx-auto pt-24 pb-12 px-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          Elevator Pitch
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hi, I&apos;m Kehinde Balogun — a frontend developer passionate about building user-focused digital products.
          I work with React, TypeScript, and modern web tools to deliver clean, fast, and accessible UIs.
          I&apos;m looking to grow with teams that value creativity, communication, and impact.
        </p>

        <video
          controls
          className="w-full max-w-xl mx-auto rounded-lg shadow border border-gray-300 dark:border-gray-600"
          src="/elevator-pitch.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </motion.section>
    </div>
  );
}
