import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-10">

        {/* Left Side */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-cyan-400 text-xl mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Aman <span className="text-cyan-400">Raj</span>
          </motion.h1>

          <div className="text-2xl md:text-3xl mt-4 text-gray-400 font-semibold">
            <ReactTyped
              strings={[
                "Software Developer",
                "Problem Solver",
                "Blockchain Enthusiast",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>

          <p className="text-gray-500 mt-6 text-lg max-w-lg leading-8">
            Computer Science student specializing in Blockchain Technology,
            passionate about transforming ideas into impactful digital solutions
            through innovation, problem-solving, and modern technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 hover:shadow-cyan-400/50 hover:scale-105 transition duration-300"
            >
              Explore My Work
            </a>

            <a
              href="https://drive.google.com/file/d/1MX8sD2_nbSvq5d_Pu01p2E4hi5Uat1xK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50 hover:scale-105 transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* Icons */}
          <div className="flex gap-6 text-3xl mt-8">
            <a
              href="https://github.com/rajaman739"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/amanraj7399/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
            </a>

            <a
              href="https://leetcode.com/u/rajaman7399/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode className="hover:text-cyan-400 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              repeat: Infinity,
              duration: 3,
            },
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="/images/pp.png"
              alt="Aman Raj"
              className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-cyan-400 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;