import { motion, useInView } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: (360 / 30) * i,
    distance: Math.random() * 300 + 200,
    delay: Math.random() * 0.3,
    duration: Math.random() * 1 + 1.5,
    size: Math.random() * 20 + 10,
  }));

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGx3aHRqZGczZmQ4Zm9obzF5eGdhdTRtdDR1ZHJ3YzJ3OHR5dWVrMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlTy9x8FZo0XO1i/giphy.gif"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 w-40 h-40 opacity-15"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExajc3djFtZnV1bDdjZWRrM2p2am50ZzFiYWQybDYyaWwzdXFubDd6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/uWqkrjdWGyyQEsJsjC/giphy.gif"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 opacity-10"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0023E8]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {isInView &&
        particles.map((particle) => {
          const radians = (particle.angle * Math.PI) / 180;
          const x = Math.cos(radians) * particle.distance;
          const y = Math.sin(radians) * particle.distance;

          return (
            <motion.div
              key={particle.id}
              className="absolute top-1/2 left-1/2 rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: `radial-gradient(circle, ${
                  particle.id % 3 === 0 ? "#0023E8" : particle.id % 3 === 1 ? "#F3F3F3" : "#B7B8BC"
                }, transparent)`,
              }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{
                x: x,
                y: y,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                ease: "easeOut",
              }}
            />
          );
        })}

      {isInView &&
        [0, 0.2, 0.4].map((delay, index) => (
          <motion.div
            key={`ring-${index}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full"
            style={{
              borderColor: index % 2 === 0 ? "#0023E8" : "#F3F3F3",
            }}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{
              width: 800,
              height: 800,
              opacity: 0,
            }}
            transition={{
              duration: 2,
              delay: delay,
              ease: "easeOut",
            }}
          />
        ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="bg-gradient-to-br from-[#0023E8] to-[#0023E8]/80 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #F3F3F3 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #F3F3F3 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, #F3F3F3 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, #F3F3F3 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(45deg, #F3F3F3 25%, transparent 25%), 
                                 linear-gradient(-45deg, #F3F3F3 25%, transparent 25%), 
                                 linear-gradient(45deg, transparent 75%, #F3F3F3 75%), 
                                 linear-gradient(-45deg, transparent 75%, #F3F3F3 75%)`,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -10, 10, 0],
              }}
              className="inline-flex items-center justify-center w-16 h-16 bg-[#F3F3F3] rounded-full mb-6 cursor-pointer"
            >
              <Mail className="w-8 h-8 text-[#0023E8]" />
            </motion.div>

            <motion.h2
              className="text-[#F3F3F3] mb-6 text-2xl md:text-3xl lg:text-4xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Ready to Transform Your Business?
            </motion.h2>

            <motion.p
              className="text-[#F3F3F3]/90 text-xl mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Let's discuss how our technology solutions can help you achieve your goals. Get in touch for a free consultation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(243, 243, 243, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#F3F3F3] text-[#0023E8] rounded-lg flex items-center justify-center gap-2 hover:bg-[#F3F3F3]/90 transition-colors"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(243, 243, 243, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/portfolio")}
                className="px-8 py-4 border-2 border-[#F3F3F3] text-[#F3F3F3] rounded-lg hover:bg-[#F3F3F3]/10 transition-colors"
              >
                Portfolio
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}