/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { CheckCircle } from "react-feather";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stack = [
  "Next.js", "React", "TypeScript", "Redux Toolkit",
  "Node.js", "Express", "Django", "DRF",
];

export default function Bio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl z-0" aria-hidden="true"></div>

      <motion.section
        className="relative z-10 max-w-3xl mx-auto pt-24 pb-24 sm:pb-12 text-center px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          About Me
        </motion.h1>
        <motion.p variants={item} className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Building Production-Ready Systems, Not Just Screens.
        </motion.p>

        {/* Intro */}
        <motion.p variants={item} className="mb-4">
          I'm{" "}
          <strong className="text-blue-600 dark:text-blue-400">Kehinde Balogun</strong>
          , a{" "}
          <span className="text-blue-600 font-semibold dark:text-blue-400">
            frontend-first software developer
          </span>{" "}
          with strong backend experience. Over the past few months, I've focused on building{" "}
          <span className="text-blue-600 font-semibold dark:text-blue-400">
            scalable, API-driven applications
          </span>{" "}
          that balance performance, maintainability, and real user needs.
        </motion.p>

        {/* Stack */}
        <motion.p variants={item} className="mb-3">
          My core stack:
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-6">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Recent focus */}
        <motion.p variants={item} className="mb-6">
          Recently, I've worked on dashboards, polling platforms, and content-driven systems where
          the frontend depends heavily on{" "}
          <span className="text-blue-600 font-semibold dark:text-blue-400">
            clean API contracts, global state management, authentication flows, and performance
            optimization
          </span>
          . I'm comfortable moving between UI, API integration, and backend logic to ship features
          end to end.
        </motion.p>

        {/* Commitments */}
        <motion.h2 variants={item} className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          My Commitments
        </motion.h2>
        <motion.ul variants={item} className="space-y-4 text-left">
          <li className="flex gap-3">
            <CheckCircle size={20} className="mt-0.5 shrink-0 text-green-500" aria-hidden="true" />
            <span>
              <span className="font-semibold">Open Source & Education:</span> I contribute to{" "}
              <strong className="text-purple-600 dark:text-purple-400">STEMplore</strong>
              , collaborating on frontend features and API-powered workflows while sharing practical
              knowledge with junior developers.
            </span>
          </li>
          <li className="flex gap-3">
            <CheckCircle size={20} className="mt-0.5 shrink-0 text-green-500" aria-hidden="true" />
            <span>
              <span className="font-semibold">Impact & Results:</span> I focus on outcomes. My work
              on event and community platforms led to a{" "}
              <strong className="text-green-600 dark:text-green-400">20% increase in ticket sales</strong>{" "}
              by improving UX and backend-driven flows.
            </span>
          </li>
        </motion.ul>

        {/* Close */}
        <motion.p variants={item} className="mt-6">
          I'm currently growing as a frontend engineer who understands backend systems—writing clean
          UI code, integrating real APIs, and contributing to products built to scale.
        </motion.p>

        <motion.a
          variants={item}
          href="/Kehinde-Balogun-CV.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Download My CV
        </motion.a>
      </motion.section>
    </div>
  );
}
