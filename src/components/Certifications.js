import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { SiSap } from "react-icons/si";

function Certifications() {
  const certs = [
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/bcc925d8af7a472899d59290e2d4e6d5",
      icon: <FaCertificate size={40} />,
    },
    {
      name: "SAP Certified – SAP Generative AI Developer",
      issuer: "SAP",
      link: "https://www.credly.com/badges/bb17ab97-0ccc-4b99-91bf-ac4a90e650fc/public_url",
      icon: <SiSap size={40} />,
    },
    {
      name: "Cisco Networking Basics",
      issuer: "Cisco",
      link: "https://drive.google.com/file/d/1pVGa7pDgcoyWvFSULsBWET-fD65zI2qb/view",
      icon: <FaCertificate size={40} />,
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen bg-gray-900 text-white px-8 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-6">
        Certifications
      </h2>

      <p className="text-center text-gray-400 mb-14 text-lg max-w-3xl mx-auto">
        Certifications that reflect my interest in Cloud Computing,
        Artificial Intelligence, and Networking.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-black border border-cyan-400 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/40 hover:scale-[1.03] transition duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-cyan-400 mt-1">
                {cert.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold leading-snug">
                  {cert.name}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {cert.issuer}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;