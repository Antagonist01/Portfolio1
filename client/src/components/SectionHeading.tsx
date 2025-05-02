import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <motion.div 
      className={`flex flex-col items-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{title}</h2>
      <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
    </motion.div>
  );
}
