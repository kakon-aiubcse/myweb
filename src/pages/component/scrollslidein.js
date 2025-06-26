import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ScrollSlideIn = ({ direction = "left", children }) => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 430); // Tailwind's "xs" = <640px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left"
      ? [-100, 0]
      : direction === "right"
      ? [100, 0]
      : [0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "down" ? [100, 0] : [0, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={isMobile ? { x, y, opacity } : {}}
      initial={false}
      animate={false}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSlideIn;
