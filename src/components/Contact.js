import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
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
            Contact
          </h2>

          <p className="text-lg text-gray-300 leading-8">
            I'm always open to connecting with fellow developers,
            recruiters, and professionals for internships and software
            development opportunities.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <a
                href="mailto:amanofficial3255@gmail.com"
                className="text-lg hover:text-cyan-400 transition"
              >
                amanofficial3255@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400 text-2xl" />
              <a
                href="tel:+919798385832"
                className="text-lg hover:text-cyan-400 transition"
              >
                +91 9798385832
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <span className="text-lg">
                Chennai, Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/rajaman739"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/amanraj7399/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://leetcode.com/u/rajaman7399/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-cyan-400 rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            Let's Connect
          </h3>

          <p className="text-gray-400 leading-8 mb-6">
            Whether you want to discuss technology, collaborate on a project,
            or explore opportunities, feel free to reach out.
          </p>

          <a
            href="mailto:amanofficial3255@gmail.com"
            className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            Send Email
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;