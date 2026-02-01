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
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            UAV Pilot Academy is managed by <span className="text-cyan-400 font-semibold">SEWA</span>, registered under the Maharashtra Unaided Private Professional Educational Institutions Act, 2015. Active in education and skill development since 2010, we are <span className="text-cyan-400 font-semibold">ISO 9001:2015 Certified</span> and registered under <span className="text-cyan-400 font-semibold">MSME</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-cyan-400">
              ISO 9001:2015 Certified
            </div>
            <div className="px-4 py-2 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-cyan-400">
              MSME Registered
            </div>
            <div className="px-4 py-2 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-cyan-400">
              DGCA Aligned Programs
            </div>
            <div className="px-4 py-2 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-cyan-400">
              Since 2010
            </div>
          </div>
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

        {/* Mission & Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl"></div>
              <Trophy className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower the next generation of drone professionals through <span className="text-cyan-400 font-semibold">discipline-driven training</span>,
                <span className="text-cyan-400 font-semibold"> aviation safety</span>, <span className="text-cyan-400 font-semibold">regulatory compliance</span>,
                and <span className="text-cyan-400 font-semibold">application-based learning</span>. We operate multiple training centers across India,
                ensuring accessibility and excellence in drone education aligned with DGCA and industry standards.
              </p>
            </div>

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>
              <Target className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be India's most trusted and comprehensive drone training institution, recognized for producing
                <span className="text-cyan-400 font-semibold"> skilled, certified, and responsible drone operators</span> who contribute
                to the advancement of the drone industry while maintaining the highest standards of safety, compliance, and professionalism.
              </p>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-white text-center mb-6">Our Core Focus Areas</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Discipline-Driven Training",
                "Aviation Safety",
                "Regulatory Compliance",
                "Application-Based Learning"
              ].map((focus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-4 text-center"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-gray-300">{focus}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;