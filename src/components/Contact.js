import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-8 py-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-cyan-400 mb-6">
            Contact Me
          </h2>

          <p className="text-lg text-gray-300 leading-8">
            Let’s connect for internships, collaborations, or exciting opportunities 🚀
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <a
                href="mailto:amanofficial3255@gmail.com?subject=Opportunity%20for%20Aman%20Raj"
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
              <a
                href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu/"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:text-cyan-400 transition"
              >
                Chennai, India
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-6 mt-8 text-3xl">
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
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/50 flex flex-col justify-center items-center text-center"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            Let’s Build Something Amazing 🚀
          </h3>

          <p className="text-gray-400 leading-8 mb-6">
            I’m open to internships, freelance projects, collaborations,
            and exciting opportunities in software development.
          </p>

          <a
            href="mailto:amanofficial3255@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Aman,%20I%20would%20like%20to%20connect%20with%20you."
            className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 hover:shadow-cyan-400/50 hover:scale-105 transition"
          >
            Hire Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;