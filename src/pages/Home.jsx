// Home page — landing section of the portfolio
import { motion } from 'framer-motion';
import profilePic from '/me.jpg';

export default function Home() {
  return (
    <main className="min-h-screen z-0 flex flex-col items-center justify-center px-4 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 dark:text-gray-200 text-gray-800 relative overflow-hidden">

      {/* Background blobs for depth */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-200 dark:bg-sky-900 rounded-full opacity-10 blur-2xl z-0"></div>

      {/* Content */}
      <motion.section
        className="z-10 text-center max-w-xl pt-24 pb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <motion.img
          src={profilePic}
          alt="Kehinde Balogun"
          className="w-40 h-40 mx-auto mb-6 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Kehinde Balogun
        </h1>
        <p className="text-xl mt-2 font-medium text-blue-600 dark:text-blue-400">
          Software Developer
        </p>
        <p className="mt-3 text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase text-sm">
          React · Node.js · Full-Stack Web Apps
        </p>
        <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto">
          I build clean, scalable web applications with a focus on great user experience. Explore my work, read my thoughts, or get in touch.
        </p>

        <div className="mt-8 mb-4 flex flex-wrap gap-3 justify-center">
          <a
            href="/portfolio"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="/bio"
            className="inline-block bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700 px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-200"
          >
            About Me
          </a>
          <a
            href="/elevator-pitch"
            className="inline-block bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700 px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-200"
          >
            Elevator Pitch
          </a>
          <a
            href="/blog"
            className="inline-block bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700 px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-200"
          >
            Blog
          </a>
        </div>
      </motion.section>
    </main>
  );
}
