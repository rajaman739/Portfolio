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
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-cyan-400 mb-6">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-8">
            Hi, I'm <span className="text-cyan-400 font-semibold">Aman Raj</span>,
            a Computer Science student at SRM Institute of Science and Technology
            with a strong interest in software development and emerging technologies.
          </p>

          <p className="text-lg text-gray-400 leading-8 mt-4">
            I enjoy building practical applications, exploring new technologies,
            and solving real-world problems through code. My interests include
            Full Stack Development, Backend Engineering, Cloud Computing, and
            Machine Learning.
          </p>

          <p className="text-lg text-gray-400 leading-8 mt-4">
            Outside academics, I spend time improving my problem-solving skills,
            working on personal projects, and continuously learning to become a
            better software engineer.
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              icon: <FaUserAstronaut className="text-cyan-400 text-4xl mb-4" />,
              title: "Who I Am",
              desc: "Computer Science student passionate about technology, software development, and continuous learning.",
            },
            {
              icon: <FaCode className="text-cyan-400 text-4xl mb-4" />,
              title: "What I Do",
              desc: "Build web applications, explore new technologies, and strengthen problem-solving through hands-on projects.",
            },
            {
              icon: <FaRocket className="text-cyan-400 text-4xl mb-4" />,
              title: "Career Goal",
              desc: "Aspiring Software Engineer focused on creating impactful and scalable software solutions.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/30 transition"
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