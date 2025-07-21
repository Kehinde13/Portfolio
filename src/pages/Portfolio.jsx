import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0"></div> 
      <motion.section
        className="relative max-w-3xl mx-auto pt-24 pb-12 px-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          My Projects
        </h2>
        <ul className="space-y-6">

          {/* Crypto Tracker */}
          <li className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Cryptocurrency Tracker</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Built with CoinGecko API and charting libraries to visualize real-time crypto prices.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-3">
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Next.js</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">CoinGecko API</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Chart.js</span>
            </div>
            <div className="mt-3 space-x-3">
              <a href="https://crypto-dashboard-ruddy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">Live Demo</a>
              <a href="https://github.com/Kehinde13/cryptoDashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">GitHub</a>
            </div>
          </li>

          {/* Levi Ecommerce */}
          <li className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Levi Ecommerce Web App</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              A full-stack ecommerce platform where users can purchase items and admins can manage products.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-3">
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">React</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Vite</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Node.js</span>
            </div>
            <div className="mt-3 space-x-3">
              <a href="https://levi-0-0-1.vercel.app/" className="text-blue-600 dark:text-blue-400">Live Demo</a>
              <a href="https://github.com/Kehinde13/levi-0.0.1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">GitHub</a>
            </div>
          </li>

          {/* ProductivityHub */}
          <li className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">ProductivityHub</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              A productivity dashboard with Pomodoro timer, meditation player, notes, and todos.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-3">
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">React</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Tailwind</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">LocalStorage</span>
            </div>
            <div className="mt-3 space-x-3">
              <a href="https://productivity-hub-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">Live Demo</a>
              <a href="https://github.com/Kehinde13/productivityHub" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">GitHub</a>
            </div>
          </li>

          {/* Chatter Blog */}
          <li className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Chatter Blog</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              A social blogging platform with posts, comments, likes, and friend features.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mt-3">
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Firebase</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Google Auth</span>
              <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">React</span>
            </div>
            <div className="mt-3 space-x-3">
              <a href="https://chatter-azure.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">Live Demo</a>
              <a href="https://github.com/Kehinde13/Chatter" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">GitHub</a>
            </div>
          </li>

        </ul>
      </motion.section>
    </div>
  );
}
