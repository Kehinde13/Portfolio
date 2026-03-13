import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0" />

      <motion.section
        className="relative max-w-3xl mx-auto pt-24 pb-12 px-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          My Projects
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li
              key={project.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:shadow-lg flex flex-col"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs mt-4">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm px-4 py-1.5 rounded-lg font-medium transition-colors"
                >
                  GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
