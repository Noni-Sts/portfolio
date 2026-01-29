import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45 }}
    >
      {/* home layout */}
    </motion.main>
  );
}
