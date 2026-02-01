import { motion } from 'framer-motion';
import { Smartphone, Download } from 'lucide-react';

const DownloadApp = () => {
    return (
        <motion.a
            href="#download-app"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6,182,212,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all group"
        >
            <Smartphone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Download Our App</span>
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.a>
    );
};

export default DownloadApp;
