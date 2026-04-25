import { motion } from "framer-motion";
import { FaUserAstronaut, FaCode, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-8 py-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-cyan-400 mb-6">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-8">
            I’m <span className="text-cyan-400 font-semibold">Aman Raj</span>,
            a passionate Computer Science student at SRM University specializing
            in Blockchain Technology.
          </p>

          <p className="text-lg text-gray-400 leading-8 mt-4">
            I love building scalable web applications using Java, Spring Boot,
            MySQL, and exploring innovative technologies like Blockchain and AI.
          </p>

          <p className="text-lg text-gray-400 leading-8 mt-4">
            Currently preparing for placements in 2027 and constantly improving
            my problem-solving & development skills.
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              icon: <FaUserAstronaut className="text-cyan-400 text-4xl mb-4" />,
              title: "Who I Am",
              desc: "Passionate developer with a futuristic mindset.",
            },
            {
              icon: <FaCode className="text-cyan-400 text-4xl mb-4" />,
              title: "What I Do",
              desc: "Build software, solve DSA problems, and create projects.",
            },
            {
              icon: <FaRocket className="text-cyan-400 text-4xl mb-4" />,
              title: "Beyond Coding",
              desc: "Exploring Blockchain, AI, and continuously learning modern technologies.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/50 transition"
            >
              {card.icon}
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="text-gray-400 mt-2">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;