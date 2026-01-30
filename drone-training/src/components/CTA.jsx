import { motion } from 'framer-motion';
import { Send, Phone, CheckCircle, Zap, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background with animated gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 blur-3xl"
        ></motion.div>

        {/* Hex Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l26 15v30l-26 15-26-15V15z' fill='none' stroke='cyan' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-slate-900/50 backdrop-blur-md border border-cyan-500/30 p-12 rounded-3xl overflow-hidden"
        >
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center">
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display text-white"
            >
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Drone Career</span> Today
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
            >
              Join thousands of successful drone professionals who have transformed their careers with DronePro Academy.
              Get industry-recognized training, hands-on experience, and career support.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {[
                { icon: <CheckCircle className="w-4 h-4 text-cyan-500" />, text: "Certified Training" },
                { icon: <Zap className="w-4 h-4 text-cyan-500" />, text: "Hands-On Experience" },
                { icon: <Shield className="w-4 h-4 text-cyan-500" />, text: "Career Support" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-black/40 border border-white/10 px-6 py-3 rounded-full text-white font-medium hover:border-cyan-500/50 transition-colors"
                >
                  {feature.icon}
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-none text-white font-bold tracking-widest uppercase overflow-hidden"
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-3">
                  Enroll Now <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 text-gray-500 text-sm"
            >
              <p className="flex items-center justify-center gap-2">
                Or call us at <span className="text-cyan-400 font-semibold flex items-center gap-1"><Phone className="w-3 h-3" /> +91 98765 43210</span> for a free consultation
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;