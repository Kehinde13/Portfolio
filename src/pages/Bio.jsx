import { motion } from "framer-motion";

export default function Bio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100  dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0"></div>
      <motion.section
        className="max-w-3xl mx-auto pt-24 pb-12 text-center px-4"
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
            is a dedicated software developer with a knack for turning complex
            ideas into intuitive, user-friendly web applications. What sets him
            apart is his ability to balance clean, maintainable code with
            thoughtful product design—always with the end user in mind.
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
            , enabling him to build tools that solve real-world problems and
            improve lives.
          </span>
          <span className="block">
            He’s passionate about education, impact, and open collaboration.
            Kehinde contributes to{" "}
            <strong className="text-purple-600 dark:text-purple-400">
              Stemplore
            </strong>
            , an open-source LMS project that supports underprivileged kids with
            accessible learning resources. He also publishes technical tutorials
            to help junior developers break into the tech industry.
          </span>
          <span className="block">
            Among his achievements, Kehinde volunteered with the New York-based
            Spectrum Charity Organization to develop their website and event
            landing pages. His work helped boost attendance at their annual
            comedy show and increased ticket sales by{" "}
            <strong className="text-green-600 dark:text-green-400">20%</strong>
            through improved online visibility and a streamlined registration
            process.
          </span>
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
          When not coding, Kehinde enjoys exploring new technologies,
          collaborating with mission-driven teams, and contributing to
          open-source projects.
        </p>
        <a
          href="/Kehinde-Balogun-CV.pdf"
          download
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download My CV
        </a>
      </motion.section>
    </div>
  );
}
