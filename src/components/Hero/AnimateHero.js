import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
};

const AnimateHero = ({ children }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "easeOut", duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateHero;
