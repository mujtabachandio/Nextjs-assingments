"use client"
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; 

const SkillsPage = () => {
  const skills = [
    {
      id: 1,
      icon: <FaReact size={40} />,
      title: 'React.js',
      description: 'Expert in building dynamic user interfaces with React.js.',
    },
    {
      id: 2,
      icon: <FaNodeJs size={40} />,
      title: 'Node.js',
      description: 'Skilled in backend development using Node.js and Express.',
    },
    {
      id: 3,
      icon: <FaPython size={40} />,
      title: 'Python',
      description: 'Proficient in Python for web development, data science, and automation.',
    },
    {
      id: 4,
      icon: <FaDatabase size={40} />,
      title: 'Django',
      description: 'Proficient in developing robust web applications with Django.',
    },
    {
      id: 5,
      icon: <FaHtml5 size={40} />,
      title: 'HTML5',
      description: 'Strong understanding of HTML5 for structuring web content.',
    },
    {
      id: 6,
      icon: <FaCss3Alt size={40} />,
      title: 'CSS3',
      description: 'Expert in styling web applications with CSS3 and Tailwind CSS.',
    },
    {
      id: 7,
      icon: <FaJsSquare size={40} />,
      title: 'JavaScript',
      description: 'Adept in JavaScript for creating interactive web applications.',
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-center text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skill => (
          <motion.div
            key={skill.id}
            className="bg-black dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300 ease-in-out hover:bg-red-600 dark:hover:bg-red-900" // Changed hover effect to background color
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 lg:h-16 lg:w-16 dark:bg-primary-900 transition-colors duration-300 ease-in-out hover:bg-opacity-90 dark:hover:bg-opacity-80"> {/* Changed hover effect to background color */}
              {skill.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{skill.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
