import { motion } from "framer-motion";

export interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  technologies,
  demoLink,
  githubLink,
}: ProjectProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gradient">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
