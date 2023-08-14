import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import useDarkmode from '../utils/hooks/useDarkMode';

const ThemeSwitcher: React.FC = () => {
  const [theme, toggleTheme] = useDarkmode();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Add state for button disabling

  const handleToggle = () => {
    if (!isAnimating && !isButtonDisabled) {
      setIsAnimating(true);
      setIsButtonDisabled(true); // Disable button during animation
      toggleTheme();
    }
  };

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false); // Animation finished
        setIsButtonDisabled(false); // Enable button after a short delay
      }, 500); // Adjust the delay time as needed
    }
  }, [isAnimating]);

  return (
    <div className='z-10 fixed bottom-4 right-4 '>
      <motion.div
        className={`relative w-12 h-12 cursor-pointer focus:ring-4 overflow-hidden ${
          theme !== 'dark'
            ? 'bg-gray-400 focus:ring-gray-400/60'
            : 'bg-amber-500 focus:ring-amber-400/60'
        } rounded-full flex items-center justify-center shadow-lg focus:outline-none`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
      >
        <AnimatePresence>
          <motion.div
            initial={{ y: theme === 'dark' ? -40 : 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: theme === 'dark' ? 40 : -40, opacity: 0 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            key={theme}
          >
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              {theme === 'dark' ? (
                <FiSun size={24} className='text-white' />
              ) : (
                <FiMoon size={24} className='text-white' />
              )}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
