import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Zap, Crosshair, Building, TrendingUp, Handshake } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const advantages = [
    {
      title: "Certified & Experienced Instructors",
      description: "Learn from industry veterans with thousands of flight hours and recognized certifications.",
      icon: <Users className="w-8 h-8" />,
      count: "15+",
      color: "cyan"
    },
    {
      title: "Hands-On Practical Training",
      description: "80% practical sessions with real drones in controlled flight environments.",
      icon: <Zap className="w-8 h-8" />,
      count: "80%",
      color: "blue"
    },
    {
      title: "Real-World Flight Experience",
      description: "Train in diverse scenarios and environments to prepare for actual field operations.",
      icon: <Crosshair className="w-8 h-8" />,
      count: "500+",
      color: "purple"
    },
    {
      title: "Modern Infrastructure",
      description: "State-of-the-art training facilities with indoor and outdoor flight zones.",
      icon: <Building className="w-8 h-8" />,
      count: "3",
      color: "emerald"
    },
    {
      title: "Career Guidance & Support",
      description: "Placement assistance and career counseling to help you succeed in the drone industry.",
      icon: <TrendingUp className="w-8 h-8" />,
      count: "95%",
      color: "orange"
    },
    {
      title: "Industry Connections",
      description: "Strong network with drone companies for internships and job opportunities.",
      icon: <Handshake className="w-8 h-8" />,
      count: "50+",
      color: "pink"
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base font-semibold text-cyan-500 tracking-widest uppercase mb-3">
            Our Advantages
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white font-display uppercase">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Choose Us</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Discover what sets DronePro Academy apart from other training institutions. We're committed to your success.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-white/10 p-8 overflow-hidden hover:bg-slate-900/60 transition-colors"
            >
              {/* Border Animation */}
              <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 transition-colors duration-300"></div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-cyan-400 rounded-full box-shadow-[0_0_10px_cyan]"></div>
              </div>

              {/* Count Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className={`absolute top-0 left-0 px-4 py-2 bg-${advantage.color}-500/20 text-${advantage.color}-400 font-bold text-sm tracking-widest rounded-br-2xl border-b border-r border-${advantage.color}-500/20`}
              >
                {advantage.count}
              </motion.div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-lg bg-${advantage.color}-500/10 flex items-center justify-center mb-6 text-${advantage.color}-400 group-hover:scale-110 group-hover:bg-${advantage.color}-500/20 transition-all duration-300 mt-6`}>
                {advantage.icon}
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold mb-3 text-white font-display uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                {advantage.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 border-y border-white/10 bg-black/50 backdrop-blur-md"
        >
          <div className="p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2 font-display"
                >
                  98%
                </motion.div>
                <div className="text-sm text-cyan-500 uppercase tracking-widest">Success Rate</div>
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
              </div>
              <div className="text-center relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2 font-display"
                >
                  500+
                </motion.div>
                <div className="text-sm text-cyan-500 uppercase tracking-widest">Graduates</div>
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
              </div>
              <div className="text-center relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2 font-display"
                >
                  4.9
                </motion.div>
                <div className="text-sm text-cyan-500 uppercase tracking-widest">Average Rating</div>
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2 font-display"
                >
                  50+
                </motion.div>
                <div className="text-sm text-cyan-500 uppercase tracking-widest">Partners</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;