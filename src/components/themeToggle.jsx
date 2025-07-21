// components/ThemeToggle.jsx
import { useTheme } from '../context/themeProvider.jsx';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'react-feather'; 

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
      aria-label="Toggle Theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <Moon className="text-white" />
        ) : (
          <Sun className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}
