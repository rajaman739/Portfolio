import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaCode,
  FaCogs,
  FaNetworkWired,
  FaDesktop,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const technicalSkills = [
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
    { name: "MySQL", icon: <FaDatabase size={40} /> },
  ];

  const coreSkills = [
    { name: "DSA", icon: <FaCode size={40} /> },
    { name: "OOPS", icon: <FaCogs size={40} /> },
    { name: "DBMS", icon: <FaDatabase size={40} /> },
    { name: "CN", icon: <FaNetworkWired size={40} /> },
    { name: "OS", icon: <FaDesktop size={40} /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        My Skills
      </h2>

      {/* Technical Skills */}
      <h3 className="text-3xl font-semibold text-center text-cyan-300 mb-8">
        Technical Skills
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-black border border-cyan-400 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-400/50 hover:scale-110 transition duration-300"
          >
            <div className="text-cyan-400">{skill.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Core Skills */}
      <h3 className="text-3xl font-semibold text-center text-cyan-300 mb-8">
        Core CS Fundamentals
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {coreSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-black border border-cyan-400 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-400/50 hover:scale-110 transition duration-300"
          >
            <div className="text-cyan-400">{skill.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;