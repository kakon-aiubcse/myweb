import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSlideIn = ({ direction = "left", children }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left"
      ? [-100, 0]
      : direction === "right"
      ? [100, 0]
      : [0, 0] // no x movement for "down"
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "down" ? [100, 0] : [0, 0] // only animate y if direction is "down"
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} style={{ x, y, opacity }}>
      {children}
    </motion.div>
  );
};

export default ScrollSlideIn;
