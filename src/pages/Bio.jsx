/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0"></div>

      <motion.section
        className="max-w-3xl mx-auto pt-24 pb-12 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About Me</h2>
        <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-white">
          Building Production-Ready Systems, Not Just Screens.
        </h2>

        {/* Intro */}
        <span className="block mb-4">
          I'm{" "}
          <strong className="text-blue-600 dark:text-blue-400">
            Kehinde Balogun
          </strong>
          , a <span className="text-blue-600 font-semibold dark:text-blue-400">
            frontend-first software developer
          </span>{" "}
          with strong backend experience. Over the past few months, I’ve focused
          on building{" "}
          <span className="text-blue-600 font-semibold dark:text-blue-400">
            scalable, API-driven applications
          </span>{" "}
          that balance performance, maintainability, and real user needs.
        </span>

        {/* Stack */}
        <span className="block mb-4">
          My core stack includes{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            Next.js
          </strong>
          ,{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            React
          </strong>
          ,{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            TypeScript
          </strong>
          , and{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            Redux Toolkit
          </strong>
          . On the backend, I build and consume REST APIs using{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            Node.js
          </strong>{" "}
          with{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            Express
          </strong>
          , as well as{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            Django
          </strong>{" "}
          and{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            Django REST Framework
          </strong>
          .
        </span>

        {/* Recent focus */}
        <span className="block mb-4">
          Recently, I’ve worked on dashboards, polling platforms, and
          content-driven systems where the frontend depends heavily on{" "}
          <span className="text-blue-600 font-semibold dark:text-blue-400">
            clean API contracts, global state management, authentication flows,
            and performance optimization
          </span>
          . I’m comfortable moving between UI, API integration, and backend
          logic to ship features end to end.
        </span>

        {/* Commitments */}
        <span className="block mb-4 font-bold text-2xl text-blue-600 dark:text-white">
          My Commitments:
        </span>
        <ul className="list-disc list-inside space-y-2 ml-4 text-left">
          <li>
            <span className="font-semibold">Open Source & Education:</span> I
            contribute to{" "}
            <strong className="text-purple-600 dark:text-purple-400">
              STEMplore
            </strong>
            , collaborating on frontend features and API-powered workflows while
            sharing practical knowledge with junior developers.
          </li>
          <li>
            <span className="font-semibold">Impact & Results:</span> I focus on
            outcomes. My work on event and community platforms led to a{" "}
            <strong className="text-green-600 dark:text-green-400">
              20% increase in ticket sales
            </strong>{" "}
            by improving UX and backend-driven flows.
          </li>
        </ul>

        {/* Close */}
        <p className="mt-6">
          I’m currently growing as a frontend engineer who understands backend
          systems—writing clean UI code, integrating real APIs, and contributing
          to products built to scale.
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
