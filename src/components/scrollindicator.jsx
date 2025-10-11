import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide if scrolled more than 50px
      setShow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null; // Don't render if not at top

  return (
    <motion.div
      className="hidden md:flex flex-col items-center absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <span className="text-gray-400 mb-2 font-display">Scroll Down</span>
      <div className="w-3 h-3 border-b-2 border-r-2 border-gray-400 rotate-45 mb-1"></div>
    </motion.div>
  );
}
