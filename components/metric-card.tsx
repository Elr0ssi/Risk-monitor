import { motion } from "framer-motion";

export function MetricCard({ title, value, change }: { title: string; value: string; change?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="glass p-4 shadow-glow"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      {change ? <p className="mt-1 text-sm text-neon.blue">{change}</p> : null}
    </motion.div>
  );
}
