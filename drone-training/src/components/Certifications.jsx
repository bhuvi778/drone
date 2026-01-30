import { motion } from 'framer-motion';
import { BadgeCheck, Award, ShieldCheck, FileCheck, CheckCircle, Scale } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "DGCA Certified",
      description: "Authorized training programs compliant with Directorate General of Civil Aviation regulations.",
      icon: <BadgeCheck className="w-10 h-10" />,
      color: "cyan"
    },
    {
      title: "ISO 9001:2015",
      description: "Quality management systems certified for delivering excellence in drone training.",
      icon: <Award className="w-10 h-10" />,
      color: "purple"
    },
    {
      title: "Industry Recognized",
      description: "Certifications acknowledged by major drone manufacturers and industry leaders.",
      icon: <FileCheck className="w-10 h-10" />,
      color: "blue"
    },
    {
      title: "Safety Compliant",
      description: "Adheres to international safety standards and best practices in drone operations.",
      icon: <ShieldCheck className="w-10 h-10" />,
      color: "emerald"
    },
  ];

  const compliance = [
    "DGCA Flight Permit Training",
    "UIN & UAP Registration Process",
    "No-Fly Zone Awareness",
    "Airspace Classification Training",
    "Emergency Procedures",
    "Insurance & Liability Coverage",
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
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
            Credibility & Trust
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white font-display uppercase">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Compliance</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Our certifications and compliance measures ensure you receive industry-recognized training that meets the highest standards.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
            >
              {/* Decorative Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${cert.color}-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}></div>

              <div className={`w-16 h-16 rounded-lg bg-${cert.color}-500/10 flex items-center justify-center text-${cert.color}-400 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {cert.icon}
              </div>

              <h4 className="text-xl font-bold mb-3 text-white font-display uppercase tracking-wide group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-1 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-sm"></div>
          <div className="relative bg-slate-950 rounded-2xl p-8 md:p-12 overflow-hidden">

            {/* Background Grid inside card */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="text-cyan-500 w-6 h-6" />
                  <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Legal & Safety</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6 text-white font-display">
                  Regulatory Compliance Training
                </h4>
                <p className="text-gray-400 leading-relaxed mb-8 font-light">
                  We ensure all our students are well-versed in drone regulations, safety protocols, and legal requirements. Our comprehensive compliance training covers everything from registration to flight operations.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {compliance.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center">
                {/* Rotating Rings Animation */}
                <div className="relative w-64 h-64">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-cyan-500/30 rounded-full"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-cyan-500/20 rounded-full"
                  ></motion.div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 backdrop-blur-md bg-cyan-900/10 rounded-full border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                      <ShieldCheck className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white font-display">100%</div>
                      <div className="text-xs text-cyan-400 uppercase tracking-wider">Compliant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;