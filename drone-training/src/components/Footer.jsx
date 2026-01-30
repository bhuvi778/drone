import { motion } from 'framer-motion';
import { Rocket, Instagram, Linkedin, Youtube, Facebook, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Training Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
  ];

  const trainingPrograms = [
    'Beginner Pilot Training',
    'Advanced Pilot Training',
    'Commercial Operations',
    'Aerial Photography',
    'Surveying & Mapping',
    'Agricultural Training',
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: '#',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: '#',
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      href: '#',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      href: '#',
    },
  ];

  return (
    <footer id="contact" className="pt-24 pb-8 bg-transparent border-t border-white/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-md opacity-40 rounded-full"></div>
                <Rocket className="w-8 h-8 text-cyan-400 relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-[0.15em] leading-none">UAV PILOT</span>
                <span className="text-xs text-cyan-400 tracking-[0.2em] font-light">ACADEMY</span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 font-light">
              India's leading drone training institution committed to producing skilled, certified, and responsible drone operators for the future of aviation.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-900/20 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-cyan-400 transition-colors flex items-center group font-light"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-cyan-500/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Training Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 font-display">Training Programs</h4>
            <ul className="space-y-3">
              {trainingPrograms.map((program) => (
                <li key={program}>
                  <a
                    href="#programs"
                    className="text-gray-500 hover:text-cyan-400 transition-colors flex items-center group font-light"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-cyan-500/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-500 font-light group">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-cyan-500 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">123 Tech Park, Sector 62<br />Noida, Uttar Pradesh 201301</span>
              </li>
              <li className="flex items-center text-gray-500 font-light group">
                <Phone className="w-5 h-5 mr-3 text-cyan-500 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center text-gray-500 font-light group">
                <Mail className="w-5 h-5 mr-3 text-cyan-500 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">info@droneproacademy.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} UAV Pilot Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;