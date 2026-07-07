import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      year: "2023 - 2027",
      title: "B.Tech Computer Science Engineering (Blockchain Technology)",
      place: "SRM Institute of Science and Technology",
      score: "CGPA: 8.32 / 10",
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
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-6">
        Education
      </h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
        My academic journey and educational background.
      </p>

      <div className="max-w-5xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/40 transition"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={edu.logo}
                alt={edu.place}
                className="w-20 h-20 rounded-xl border-2 border-cyan-400 object-contain bg-white p-1"
              />

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="text-cyan-400 text-2xl">
                    {edu.icon}
                  </span>

                  <span className="bg-cyan-400 text-black px-3 py-1 rounded-full font-semibold text-sm">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  {edu.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {edu.place}
                </p>

                <p className="text-cyan-400 font-semibold mt-3">
                  {edu.score}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;