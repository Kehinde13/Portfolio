import { motion } from "framer-motion";

export default function Bio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100  dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
    <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0"></div>
    <motion.section
      className="max-w-3xl mx-auto pt-24 mb-12 text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-blue-600 mb-4">About Me</h2>
      <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-4">
        <span className="block">
          <strong className="text-blue-600 dark:text-blue-400">
            Kehinde Balogun
          </strong>{" "}
          is a skilled software developer with a passion for building intuitive
          and scalable web applications. With over three years of hands-on
          experience, he is known for writing clean, maintainable code and
          delivering impactful digital solutions.
        </span>
        <span className="block">
          Currently working independently under his personal brand, Kehinde
          specializes in{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            JavaScript
          </strong>
          ,{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            ReactJS
          </strong>
          , and{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            NodeJS
          </strong>
          , helping teams turn product ideas into reliable, user-friendly
          applications.
        </span>
        <span className="block">
          His goals are rooted in continuous growth—contributing to innovative
          projects, expanding into technical leadership, and building tools that
          make a difference in people’s lives.
        </span>
        <span className="block">
          Among his achievements, Kehinde has successfully led frontend
          development on a real-time dashboard for a fintech startup and
          optimized a React-based product to cut page load times by over{" "}
          <strong className="text-green-600 dark:text-green-400">40%</strong>.
          He’s also published technical tutorials aimed at helping junior
          developers break into the industry.
        </span>
      </p>
      <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
        When not coding, Kehinde enjoys exploring new technologies, contributing
        to open-source projects.
      </p>
    </motion.section>
    </div>
  );
}
