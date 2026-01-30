import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Drones = () => {
  const droneModels = [
    {
      name: "DJI Mini Series",
      description: "Perfect for beginners with ultra-lightweight design and easy-to-use features.",
      features: ["Under 249g", "3-Axis Gimbal", "4K Video", "30-min Flight"],
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="50" cy="50" rx="40" ry="20" stroke="currentColor" className="text-cyan-500" />
          <path d="M10 50 L90 50" stroke="currentColor" strokeDasharray="4 4" className="text-cyan-500/50" />
          <ellipse cx="50" cy="45" rx="35" ry="15" stroke="currentColor" className="text-cyan-400" />
          <circle cx="50" cy="45" r="5" fill="currentColor" className="text-cyan-400" />
        </svg>
      ),
    },
    {
      name: "DJI Air / Mavic Series",
      description: "Professional-grade drones with advanced features and exceptional camera quality.",
      features: ["O3+ Transmission", "5.1K Video", "45-min Flight", "Omni Sensing"],
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 30 L80 30 L90 50 L80 70 L20 70 L10 50 Z" stroke="currentColor" className="text-cyan-500" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" className="text-cyan-400" />
          <line x1="10" y1="50" x2="35" y2="50" stroke="currentColor" className="text-cyan-500/50" />
          <line x1="65" y1="50" x2="90" y2="50" stroke="currentColor" className="text-cyan-500/50" />
        </svg>
      ),
    },
    {
      name: "DJI Phantom Series",
      description: "Industry-standard professional drones for aerial photography and videography.",
      features: ["Full-Frame Camera", "6K Video", "35-min Flight", "Pro Imaging"],
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="25" y="25" width="50" height="50" rx="10" stroke="currentColor" className="text-cyan-500" />
          <line x1="0" y1="0" x2="30" y2="30" stroke="currentColor" className="text-cyan-500" />
          <line x1="100" y1="0" x2="70" y2="30" stroke="currentColor" className="text-cyan-500" />
          <line x1="0" y1="100" x2="30" y2="70" stroke="currentColor" className="text-cyan-500" />
          <line x1="100" y1="100" x2="70" y2="70" stroke="currentColor" className="text-cyan-500" />
          <circle cx="50" cy="50" r="12" stroke="currentColor" className="text-cyan-400" />
        </svg>
      ),
    },
    {
      name: "DJI Inspire Series",
      description: "Cinematic drones with 360-degree camera rotation for professional filmmaking.",
      features: ["360° Rotation", "8K Video", "28-min Flight", "Dual Control"],
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 10 L50 90" stroke="currentColor" className="text-cyan-500/50" strokeDasharray="5 5" />
          <path d="M10 50 L90 50" stroke="currentColor" className="text-cyan-500/50" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" className="text-cyan-500" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" className="text-cyan-500/30" strokeDasharray="10 5" />
        </svg>
      ),
    },
    {
      name: "FPV Drones",
      description: "High-speed racing drones with first-person view for immersive flying experience.",
      features: ["150km/h Speed", "FPV Goggles", "4K/120fps", "Manual Mode"],
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="50,10 90,80 10,80" stroke="currentColor" className="text-cyan-500" />
          <path d="M50 30 L50 60" stroke="currentColor" className="text-cyan-400" />
          <path d="M30 70 L70 70" stroke="currentColor" className="text-cyan-400" />
        </svg>
      ),
    },
    {
      name: "Industrial Drones",
      description: "Specialized drones for spraying, surveying, and industrial applications.",
      features: ["10L Capacity", "Precise Spraying", "RTK Module", "IP55 Rating"],
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="20" y="30" width="60" height="40" stroke="currentColor" className="text-cyan-500" />
          <line x1="20" y1="30" x2="0" y2="10" stroke="currentColor" className="text-cyan-500" />
          <line x1="80" y1="30" x2="100" y2="10" stroke="currentColor" className="text-cyan-500" />
          <line x1="20" y1="70" x2="0" y2="90" stroke="currentColor" className="text-cyan-500" />
          <line x1="80" y1="70" x2="100" y2="90" stroke="currentColor" className="text-cyan-500" />
        </svg>
      ),
    },
  ];

  return (
    <section id="drones" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.2
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
          <div className="inline-block px-4 py-1 mb-4 border border-cyan-500/30 rounded-full bg-cyan-900/10">
            <span className="text-cyan-400 uppercase tracking-widest text-xs font-bold">Advanced Fleet</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white font-display">
            OUR <span className="text-cyan-500">DRONE FLEET</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Train on the latest and most advanced drone models from leading manufacturers.
          </p>
        </motion.div>

        {/* Drones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {droneModels.map((drone, index) => (
            <motion.div
              key={drone.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-black/50 border border-cyan-500/20 p-1 relative group overflow-hidden"
              style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="bg-slate-900/50 p-6 h-full backdrop-blur-sm hover:bg-slate-900/80 transition-colors">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
                    <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {drone.icon}
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-2 text-white font-display text-center group-hover:text-cyan-400 transition-colors">
                  {drone.name}
                </h4>
                <p className="text-gray-500 text-sm italic text-center mb-6 border-b border-white/5 pb-4">
                  {drone.description}
                </p>

                <div className="space-y-3">
                  {drone.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 shadow-[0_0_5px_cyan]"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-white/10 flex justify-end">
                  <ChevronRight className="text-cyan-500/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500 opacity-50"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-500 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500 opacity-50"></div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 border border-cyan-500/30 bg-cyan-900/5 p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <svg className="w-32 h-32 text-cyan-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="20" strokeWidth="1" />
              <line x1="50" y1="10" x2="50" y2="90" strokeWidth="1" />
              <line x1="10" y1="50" x2="90" y2="50" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-4 text-white font-display">
                Custom Fleet Training?
              </h4>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                We offer customized training programs on specific drone models based on your organizational requirements. Contact us to discuss your specific needs.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Drones;