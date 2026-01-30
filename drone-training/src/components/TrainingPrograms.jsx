import { motion } from 'framer-motion';
import { Plane, Rocket, Building2, Camera, Map, Leaf, Briefcase, ArrowRight, Clock, Star } from 'lucide-react';

const TrainingPrograms = () => {
  const programs = [
    {
      title: "Beginner Drone Pilot Training",
      description: "Start your drone journey with fundamental flight skills, safety protocols, and basic regulations.",
      icon: <Plane className="w-8 h-8" />,
      duration: "2 Weeks",
      level: "Beginner",
      color: "cyan"
    },
    {
      title: "Advanced Drone Pilot Training",
      description: "Master complex maneuvers, advanced navigation, and precision flying techniques.",
      icon: <Rocket className="w-8 h-8" />,
      duration: "4 Weeks",
      level: "Advanced",
      color: "purple"
    },
    {
      title: "Commercial Drone Operations",
      description: "Learn to operate drones for commercial applications including inspections and surveys.",
      icon: <Briefcase className="w-8 h-8" />,
      duration: "6 Weeks",
      level: "Professional",
      color: "blue"
    },
    {
      title: "Aerial Photography",
      description: "Capture stunning aerial visuals with professional camera techniques and composition.",
      icon: <Camera className="w-8 h-8" />,
      duration: "3 Weeks",
      level: "Intermediate",
      color: "pink"
    },
    {
      title: "Surveying & Mapping",
      description: "Specialized training for using drones in land surveying and 3D mapping with data analysis.",
      icon: <Map className="w-8 h-8" />,
      duration: "5 Weeks",
      level: "Advanced",
      color: "emerald"
    },
    {
      title: "Agricultural Drone Training",
      description: "Master drone applications in agriculture including crop monitoring and precise spraying.",
      icon: <Leaf className="w-8 h-8" />,
      duration: "4 Weeks",
      level: "Intermediate",
      color: "lime"
    },
    {
      title: "Enterprise Solutions",
      description: "Customized programs for enterprise and government clients covering security and surveillance.",
      icon: <Building2 className="w-8 h-8" />,
      duration: "Custom",
      level: "Enterprise",
      color: "indigo"
    },
  ];

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute inset-0 opacity-20" style={{
          background: 'linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px)',
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
            Our Courses
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white font-display uppercase">
            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Programs</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Comprehensive training programs designed to take you from beginner to professional drone operator.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-${program.color}-500/50 group-hover:bg-${program.color}-400 transition-colors`}></div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg bg-${program.color}-500/10 text-${program.color}-400 group-hover:text-white group-hover:bg-${program.color}-500 transition-all duration-300`}>
                    {program.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-gray-400 border border-white/10 rounded-full bg-black/50">
                    {program.level}
                  </span>
                </div>

                <h4 className="text-xl font-bold mb-3 text-white font-display group-hover:text-cyan-400 transition-colors">
                  {program.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {program.description}
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-dashed border-white/10 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-500" />
                    <span>Certified</span>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 p-4">
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:-rotate-45 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all clip-path-polygon"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            View All Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPrograms;