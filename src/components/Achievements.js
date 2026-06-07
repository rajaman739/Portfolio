import { motion } from "framer-motion";

function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-black text-white px-8 py-20 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-16">
          Achievements
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/40 transition"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🏆</div>

            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              1st Prize - Smart Parking Alarm System
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              Awarded First Prize at <span className="text-cyan-400">Tech Know, SRM Institute of Science and Technology</span>
              for developing an Arduino-based Smart Parking Alarm System that
              provides real-time obstacle detection and parking assistance using
              ultrasonic sensors and embedded systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;