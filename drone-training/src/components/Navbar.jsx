import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'COURSES', href: '#programs' },
    { name: 'ADMISSION', href: '#admission' },
    { name: 'FACILITIES', href: '#drones' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-xl border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6 border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-40 rounded-full"></div>
              <Rocket className="w-8 h-8 text-cyan-400 relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-[0.15em] leading-none">UAV PILOT</span>
              <span className="text-xs text-cyan-400 tracking-[0.2em] font-light">ACADEMY</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group text-sm font-medium tracking-widest text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-2.5 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/50 rounded text-sm font-bold text-cyan-50 tracking-widest hover:bg-cyan-900/80 transition-all uppercase relative overflow-hidden group"
            >
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium tracking-widest py-3 rounded text-sm border-l-2 border-transparent hover:border-cyan-500"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded font-bold tracking-widest uppercase text-sm mt-4">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;