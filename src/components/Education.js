import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      year: "2027",
      title: "B.Tech CSE - Blockchain Technology",
      place: "SRM Institute of Science and Technology",
      score: "CGPA: 8.24",
      logo: "/images/SRM.jpg",
      icon: <FaGraduationCap />,
    },
    {
      year: "2023",
      title: "Class XII (PCM)",
      place: "Sainik School Tilaiya",
      score: "64.2%",
      logo: "/images/SST.jpg",
      icon: <FaSchool />,
    },
    {
      year: "2021",
      title: "Class X",
      place: "Sainik School Tilaiya",
      score: "93.2%",
      logo: "/images/SST.jpg",
      icon: <FaSchool />,
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-black text-white px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        Education
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-400 h-full shadow-[0_0_20px_#00ffff]"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`mb-8 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } w-full`}
          >
            <div className="w-[42%] bg-gray-900 border border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition duration-300">

              {/* Logo + Icon */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={edu.logo}
                  alt={edu.place}
                  className="w-16 h-16 rounded-lg border-2 border-cyan-400 object-contain bg-white p-1"
                />
                <div className="text-cyan-400 text-3xl">{edu.icon}</div>
              </div>

              <h3 className="text-2xl font-bold">{edu.title}</h3>
              <p className="text-gray-400">{edu.place}</p>
              <p className="text-cyan-400 font-semibold mt-2">{edu.score}</p>

              <span className="inline-block mt-4 bg-cyan-400 text-black px-4 py-1 rounded-full font-bold">
                {edu.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;