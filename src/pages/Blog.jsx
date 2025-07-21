import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold my-10 text-center text-blue-700 dark:text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Medium Blog Posts
        </motion.h2>

        <ul className="space-y-6">
          {[
            {
              title: "Getting Started with Node.js: Build Your First Fullstack App",
              url: "https://medium.com/@balogunkehinde3/getting-started-with-node-js-build-your-first-fullstack-app-9f6610b3dc7c",
              description:
                "Built a dozen frontends but never touched a backend? Learn to connect the frontend and backend with a simple but powerful Node.js Todo app.",
              date: "May 5, 2025",
              readTime: "14 min read",
            },
            {
              title:
                "Comprehensive Guide to Testing in Next.js with Jest and React Testing Library",
              url: "https://medium.com/@balogunkehinde3/comprehensive-guide-to-testing-in-next-js-with-jest-and-react-testing-library-964469291d06",
              description:
                "Catch bugs early and write stable React components with this hands-on guide to setting up Jest and RTL in your Next.js projects.",
              date: "Aug 21, 2024",
              readTime: "7 min read",
            },
            {
              title: "Implementing User Authentication with Firebase and ReactJS",
              url: "https://medium.com/@balogunkehinde3/implementing-user-authentication-with-firebase-and-reactjs-c2aa75458d3c",
              description:
                "Secure your app using Firebase's authentication system in React. Learn to handle sign-up, sign-in, and auth state with ease.",
              date: "Apr 30, 2024",
              readTime: "11 min read",
            },
            {
              title: "API Fetch of GitHub Repositories with ReactJS",
              url: "https://medium.com/@balogunkehinde3/api-fetch-of-github-repositories-with-reactjs-2eb9a21e80bd",
              description:
                "Explore GitHub’s API and learn how to fetch and display user repositories using React and best practices for async data handling.",
              date: "Jan 3, 2024",
              readTime: "8 min read",
            },
          ].map((post, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="block bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {post.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Published on {post.date} · {post.readTime}
                </p>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
