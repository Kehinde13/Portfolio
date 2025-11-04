/* eslint-disable react/no-unescaped-entities */
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
        <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-white">
         Building Solutions, One Line at a Time.
        </h2>

        {/* Section 1: Introduction and Core Stack */}
        <span className="block mb-4">
          I'm{" "}
          <strong className="text-blue-600 dark:text-blue-400">
            Kehinde Balogun
          </strong>
          , and I specialize in <span className="text-blue-600 font-semibold dark:text-blue-400">Full Stack Development</span> using the modern
          JavaScript ecosystem. For me, development isn't just about syntax;
          it's about translating abstract ideas into tangible, impactful web
          products that make sense to the people who use them. I enjoy tackling
          the challenge of balancing <span className="text-blue-600 font-semibold dark:text-blue-400">clean, scalable code</span> with exceptional
          user experience.
        </span>

        {/* Section 2: Core Technologies (Emphasizing the main stack) */}
        <span className="block mb-4">
          My core expertise lies in:{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            React
          </strong>
          ,{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            Node.js
          </strong>
          , and developing high-performance applications with{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            TypeScript
          </strong>
          .
        </span>

        {/* Section 3: Commitments - Open Source & Education */}
        <span className="block mb-4 font-bold text-2xl text-blue-600 dark:text-white">
          My Commitments:
        </span>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li className="mb-2">
            <span className="font-semibold">Open Source & Education:</span> I actively contribute to{" "}
            <strong className="text-purple-600 dark:text-purple-400">
              STEMplore
            </strong>
            , an open-source LMS dedicated to providing educational resources
            for underprivileged youth. This passion extends to helping others
            grow, I regularly publish technical tutorials to help junior
            developers break into the tech industry.
          </li>
          {/* Section 4: Measurable Results */}
          <li className="mb-2">
            <span className="font-semibold">Measurable Results:</span> I love seeing my work make a difference. As
            a volunteer with the <span className="font-semibold">Spectrum Charity Organization</span>, I developed
            their website and event landing pages. My efforts weren't just about
            aesthetics; they directly contributed to a{" "}
            <strong className="text-green-600 dark:text-green-400">
              20% increase in ticket sales
            </strong>{" "}
            for their annual comedy show by streamlining the registration flow.
          </li>
        </ul>

        {/* Section 5: Closing Statement */}
        <p className="mt-6">
          When I'm not coding, you'll find me exploring new front-end
          architectures, collaborating on interesting open-source projects, and
          constantly learning what's next in the tech world. Let's connect and
          build something meaningful.
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
