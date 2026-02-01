import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Instagram, Linkedin, Youtube, Facebook, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Training Programs', href: '/#programs' },
    { name: 'SEWA Committee', href: '/sewa-committee' },
    { name: 'Training Centers', href: '/training-centers' },
    { name: 'Payment', href: '/payment' },
    { name: 'Contact', href: '/#contact' },
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
      href: 'https://www.instagram.com/uavpilotacademy',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://www.facebook.com/uavpilotacademy',
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      href: 'https://www.youtube.com/@uavpilotacademy',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/company/uavpilotacademy',
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
            <div className="mb-6">
              <img
                src={`/logo.png?v=${Date.now()}`}
                alt="UAV Pilot Academy"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              India's leading drone training institution committed to producing skilled, certified, and responsible drone operators for the future of aviation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-900/20 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const isHashLink = link.href.includes('#');
                const Component = isHashLink ? 'a' : Link;
                const linkProps = isHashLink ? { href: link.href } : { to: link.href };

                return (
                  <li key={link.name}>
                    <Component
                      {...linkProps}
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-cyan-400/60 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      {link.name}
                    </Component>
                  </li>
                );
              })}
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
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-cyan-400/60 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300 group">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-cyan-400 flex-shrink-0 group-hover:text-cyan-300 transition-colors" />
                <span className="group-hover:text-white transition-colors">
                  Ganesh Commercial Complex, 1st Floor<br />
                  Near JK Super Market, Jalkot Road<br />
                  Udgir, Latur District, Maharashtra – 413517
                </span>
              </li>
              <li className="flex items-center text-gray-300 group">
                <Phone className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+919876543210" className="group-hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center text-gray-300 group">
                <Mail className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:info@uavpilotacademy.com" className="group-hover:text-white transition-colors">info@uavpilotacademy.com</a>
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
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} UAV Pilot Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-end">
              <a href="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="/terms-conditions" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms & Conditions</a>
              <a href="/disclaimer" className="text-gray-400 hover:text-cyan-400 transition-colors">Disclaimer</a>
              <a href="/training-centers" className="text-gray-400 hover:text-cyan-400 transition-colors">Training Centers</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;