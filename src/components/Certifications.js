import { motion } from "framer-motion";
import { FaDatabase, FaCertificate } from "react-icons/fa";
import { SiSap, SiUdemy } from "react-icons/si";

function Certifications() {
  const certs = [
    {
      name: "SAP Certified - SAP Generative AI Developer",
      icon: <SiSap size={40} />,
    },
    {
      name: "Cisco Networking Basics",
      icon: <FaCertificate size={40} />,
    },
    {
      name: "Scaler DBMS Course",
      icon: <FaDatabase size={40} />,
    },
    {
      name: "Udemy C Programming For Beginners",
      icon: <SiUdemy size={40} />,
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen bg-gray-900 text-white px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black border border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition"
          >
            <div className="flex items-center gap-4">
              <div className="text-cyan-400">{cert.icon}</div>
              <h3 className="text-xl font-semibold">{cert.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;