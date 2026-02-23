import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

const FramerMotion = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <>
      <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
        Move Me
      </motion.div>

      <motion.button whileHover={{ scale: 1.2 }}>Hover</motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Fade In
      </motion.div>

      <animated.div style={styles}>Hello Animation</animated.div>
    </>
  );
};

export default FramerMotion;
