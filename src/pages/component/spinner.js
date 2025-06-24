import { motion } from "framer-motion";

export default function Spinner() {
  const bricks = [
    { id: 1, color: "bg-indigo-500", delay: 0 },
    { id: 2, color: "bg-purple-500", delay: 0.2 },
    { id: 3, color: "bg-sky-500", delay: 0.4 },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 space-x-2.5">
      {bricks.map((brick) => (
        <motion.div
          key={brick.id}
          className={`w-3 h-10 rounded ${brick.color}`}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 1,
            delay: brick.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
