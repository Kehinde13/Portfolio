import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen z-0 flex flex-col items-center justify-center px-4 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 dark:text-gray-200 text-gray-800 relative">
      {/* Optional Background Shape */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0"></div>

      {/* Content */}
      <motion.section
        className="z-10 text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Kehinde Balogun
        </h1>
        <p className="text-xl mt-2 text-gray-700 dark:text-gray-300">
          Software Developer
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Welcome to my portfolio. Use the links below to learn more about me.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="/bio"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            View Bio
          </a>
          <a
            href="/portfolio"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition"
          >
            View Portfolio
          </a>
          <a
            href="/elevator"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
          >
            Elevator Pitch
          </a>
          <a
            href="/blog"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
          >
            Blog
          </a>
        </div>
      </motion.section>
    </main>
  );
}
