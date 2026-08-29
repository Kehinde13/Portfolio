import { motion } from "framer-motion";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL",
  "Prisma ORM", "Redux Toolkit", "Vitest", "Playwright", "Git and GitHub",
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
        <motion.h1 variants={item} className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Building Production-Ready Systems, Not Just Screens.
        </motion.h1>

        <motion.div variants={item} className="space-y-4 text-left leading-relaxed">
          <p>I’m Kehinde Balogun, a software developer with more than three years of experience building web and mobile applications. I work primarily with React, Next.js, TypeScript, Node.js, and PostgreSQL, and I’m comfortable taking features from interface development through API integration, testing, and deployment.</p>
          <p>My recent work includes real-time polling systems, shipment-tracking platforms, multi-tenant storefronts, mobile applications, and large-scale website content migrations. Through these projects, I have worked with authentication, database design, third-party APIs, webhooks, automated testing, state management, responsive interfaces, and production deployment.</p>
          <p>I currently work with StarMark on a Florida Atlantic University website migration project, where I have migrated more than 500 webpages using Omni CMS. My responsibilities include organizing content according to the new site architecture, transferring core content and images, applying reusable website components, performing quality checks, and publishing pages to a testing environment for review.</p>
          <p>I also participate in developer communities and hands-on learning programs. My experience includes Global Hack Week: Agents, Hacktoberfest, open-source contribution, technical writing, and volunteer software development with STEM for Others.</p>
        </motion.div>

        <motion.h2 variants={item} className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-3">
          Core Stack
        </motion.h2>
        <motion.div variants={item} className="flex flex-wrap justify-center gap-2">
          {stack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-medium">
              {tech}
            </span>
          ))}
        </motion.div>

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
