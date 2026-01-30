import { motion } from 'framer-motion';
import { Award, ShieldCheck, FileCheck, Users, Trophy, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of industry experience and extensive flight hours."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      title: "Safety First",
      description: "Comprehensive safety protocols and risk management training to ensure responsible drone operations."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-cyan-400" />,
      title: "Regulatory Compliance",
      description: "Stay updated with DGCA and aviation regulations for legal and compliant drone operations."
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "Hands-On Experience",
      description: "Practical flight training with real drones in controlled environments for skill mastery."
    },
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Students Trained" },
    { value: "50+", label: "Certification Programs" },
    { value: "99%", label: "Student Satisfaction" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-cyan-500"></span>
            <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-medium">About Us</span>
            <span className="h-px w-8 bg-cyan-500"></span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Drone Training</span> Agency
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            DronePro Academy is a leading drone training institution dedicated to producing skilled, certified, and responsible drone operators. We combine cutting-edge technology with expert instruction to deliver world-class training programs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:border-cyan-500/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-display font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:border-cyan-500/20 transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-slate-900 to-slate-900/50 rounded-2xl p-1 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-50"></div>
          <div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative group"
                >
                  <div className="text-4xl md:text-5xl font-bold font-display text-white mb-2 group-hover:text-cyan-400 transition-colors cursor-default">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-4xl mx-auto px-6">
            <Trophy className="w-12 h-12 text-cyan-500 mx-auto mb-6 opacity-80" />
            <p className="text-xl md:text-3xl text-white font-light leading-relaxed font-display">
              "Our mission is to empower the next generation of drone professionals with <span className="text-cyan-400">comprehensive training</span>, ensuring safety, compliance, and excellence in every flight."
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="h-1 w-1 bg-cyan-500 rounded-full"></div>
              <div className="h-1 w-12 bg-cyan-800 rounded-full"></div>
              <div className="h-1 w-1 bg-cyan-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;