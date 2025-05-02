import { motion } from "framer-motion";

export interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
  position: "left" | "right";
}

export default function ExperienceItem({
  title,
  company,
  date,
  location,
  description,
  technologies,
  current = false,
  position,
}: ExperienceProps) {
  return (
    <motion.div 
      className={`${
        position === "right" 
          ? "md:ml-auto md:pl-16 pl-8" 
          : "md:mr-auto md:pr-16 pl-8"
      } ${position === "right" ? "md:w-1/2" : "md:w-1/2"}`}
      initial={{ opacity: 0, x: position === "right" ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gradient">{title}</h3>
          {current && (
            <span className="text-sm bg-gradient-primary text-white px-3 py-1 rounded-full">Current</span>
          )}
        </div>
        <h4 className="text-lg font-medium mb-2">{company}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date} | {location}</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          {description.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
