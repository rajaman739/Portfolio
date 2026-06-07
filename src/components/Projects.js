import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Attendance Management System",
      desc: "Developed a full-stack Attendance Management System for centralized attendance tracking and academic management.",
      details: [
        "Built using React.js, Spring Boot, and TiDB Cloud.",
        "Implemented JWT authentication and role-based access control.",
        "Integrated OpenCV-based face recognition for automated attendance tracking.",
        "Generated PDF and Excel attendance reports.",
        "Deployed using Vercel and Render with cloud database integration.",
      ],
      tech:
        "React.js | Spring Boot | JWT | OpenCV | TiDB Cloud | REST APIs",
      github:
        "https://github.com/rajaman739/Attendance-Management-System",
      demo:
        "https://attendance-management-system-pink.vercel.app",
      icon: <FaLaptopCode size={60} />,
    },

    {
      title: "AI-Based Crop Recommendation System (AgriIntel-AI)",
      desc: "Built an AI-powered crop recommendation platform using Machine Learning to predict suitable crops based on soil nutrients and environmental conditions.",
      details: [
        "Trained and evaluated a Random Forest model for crop prediction.",
        "Performed data preprocessing, feature engineering, and model evaluation using Accuracy, Precision, Recall, and F1-Score.",
        "Developed an interactive Streamlit dashboard for real-time crop prediction.",
        "Generated Top-5 crop recommendations with confidence scores.",
        "Implemented an end-to-end Machine Learning workflow using Python, Scikit-Learn, Pandas, NumPy, Git, and GitHub.",
      ],
      tech:
        "Python | Scikit-Learn | Pandas | NumPy | Streamlit | Machine Learning",
      github: "https://github.com/rajaman739/AgriIntel-AI",
      demo: "#",
      icon: <FaLaptopCode size={60} />,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-6">
        Featured Projects
      </h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
        Selected projects demonstrating experience in Full Stack Development,
        Machine Learning, and problem-solving.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/40 hover:scale-[1.02] transition duration-300"
          >
            <div className="text-cyan-400 mb-6 flex justify-center">
              {project.icon}
            </div>

            <h3 className="text-2xl font-bold text-center text-cyan-400">
              {project.title}
            </h3>

            <p className="text-gray-300 mt-4 leading-7 text-center">
              {project.desc}
            </p>

            <ul className="mt-6 text-gray-400 list-disc list-inside space-y-2">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            <p className="text-cyan-400 mt-6 font-semibold text-center">
              {project.tech}
            </p>

            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                GitHub
              </a>

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;