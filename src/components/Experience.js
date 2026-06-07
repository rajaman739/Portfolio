import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      company: "Vault of Code (AICTE)",
      role: "Full Stack Developer Intern",
      duration: "June 2026 – Present",
      location: "Remote",
      details: [
        "Working on full-stack web applications using modern frontend and backend technologies.",
        "Developing and integrating REST APIs for application functionality and data management.",
        "Collaborating on feature implementation, debugging, and performance improvements.",
        "Using Git and GitHub for version control and project collaboration.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-900 text-white px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-6">
        Experience
      </h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
        Professional experience gained through industry-oriented internship work.
      </p>

      <div className="max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-black border border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/40 transition"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaBriefcase className="text-cyan-400 text-4xl" />

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  {exp.role}
                </h3>

                <p className="text-lg text-white">
                  {exp.company}
                </p>

                <p className="text-gray-400">
                  {exp.duration} • {exp.location}
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-300">
              {exp.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;