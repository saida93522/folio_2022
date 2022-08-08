import { motion } from "framer-motion";

const AnimateHeader = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
      transition={{ type: "tween", duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateHeader;
