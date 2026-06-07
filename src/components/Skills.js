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
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiPostman,
} from "react-icons/si";

function Skills() {
  const technicalSkills = [
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "REST APIs", icon: <FaCode size={40} /> },
    { name: "AWS", icon: <FaAws size={40} /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "GitHub", icon: <SiGithub size={40} /> },
    { name: "Postman", icon: <SiPostman size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
  ];

  const coreSkills = [
    { name: "DSA", icon: <FaCode size={40} /> },
    { name: "OOP", icon: <FaCogs size={40} /> },
    { name: "DBMS", icon: <FaDatabase size={40} /> },
    { name: "Computer Networks", icon: <FaNetworkWired size={40} /> },
    { name: "Operating Systems", icon: <FaDesktop size={40} /> },
    { name: "Machine Learning", icon: <FaCode size={40} /> },
    { name: "Cloud Computing", icon: <FaAws size={40} /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-6">
        Skills
      </h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
        Technical expertise across Full Stack Development, Cloud Computing,
        Machine Learning, and Core Computer Science fundamentals.
      </p>

      {/* Technical Skills */}
      <h3 className="text-3xl font-semibold text-center text-cyan-300 mb-8">
        Technical Skills
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-black border border-cyan-400 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-400/40 hover:scale-[1.03] transition duration-300"
          >
            <div className="text-cyan-400">{skill.icon}</div>

            <h3 className="mt-4 text-lg font-semibold text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Tools & Platforms */}
      <h3 className="text-3xl font-semibold text-center text-cyan-300 mb-8">
        Tools & Platforms
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        {toolsSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-black border border-cyan-400 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-400/40 hover:scale-[1.03] transition duration-300"
          >
            <div className="text-cyan-400">{skill.icon}</div>

            <h3 className="mt-4 text-lg font-semibold text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Core CS Fundamentals */}
      <h3 className="text-3xl font-semibold text-center text-cyan-300 mb-8">
        Core CS Fundamentals
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {coreSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-black border border-cyan-400 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-400/40 hover:scale-[1.03] transition duration-300"
          >
            <div className="text-cyan-400">{skill.icon}</div>

            <h3 className="mt-4 text-lg font-semibold text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;