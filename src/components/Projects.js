import { motion } from "framer-motion";
import { FaLaptopCode, FaCarCrash } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Attendance Management System",
      desc: "Developed a web-based Attendance Management System using Java, Spring Boot, MySQL, HTML, CSS, JDBC/JPA, and REST APIs to automate student and employee attendance tracking.",
      details: [
        "Implemented secure authentication and role-based access control.",
        "Designed and integrated RESTful APIs for attendance marking and backend operations.",
        "Connected with MySQL for reliable data storage and report generation.",
        "Automated attendance reports to improve accuracy and reduce manual effort.",
        "Followed MVC architecture for scalability and maintainability.",
      ],
      tech: "Java | Spring Boot | MySQL | HTML | CSS | REST APIs",
      icon: <FaLaptopCode size={60} />,
    },
    {
      title: "Smart Parking Alarm System",
      desc: "Developed a Smart Parking Alarm System using Arduino UNO and ultrasonic sensors to detect obstacles and prevent vehicle collisions.",
      details: [
        "Implemented real-time distance measurement.",
        "Automated LED and buzzer alerts for safe parking assistance.",
        "Calibrated and tested the system for accurate proximity detection.",
        "Awarded 1st Prize at Tech Know SRM for innovation.",
      ],
      tech: "Arduino UNO | Embedded C | Ultrasonic Sensor | LEDs | Buzzer",
      icon: <FaCarCrash size={60} />,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-16">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition duration-300"
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

            <ul className="mt-4 text-gray-400 list-disc list-inside space-y-2">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            <p className="text-cyan-400 mt-6 font-semibold text-center">
              {project.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;