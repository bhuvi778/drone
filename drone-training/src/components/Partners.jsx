import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

const Partners = () => {
    // Partner logos - these should be replaced with actual HD logos
    const partners = [
        {
            name: "NASSCOM",
            description: "National Association of Software and Service Companies",
            logo: null // Placeholder - will need actual logo
        },
        {
            name: "DGCA",
            description: "Directorate General of Civil Aviation",
            logo: null
        },
        {
            name: "Skill India",
            description: "Ministry of Skill Development & Entrepreneurship",
            logo: null
        },
        {
            name: "Make in India",
            description: "Government of India Initiative",
            logo: null
        },
        {
            name: "MSME",
            description: "Micro, Small & Medium Enterprises",
            logo: null
        },
        {
            name: "ISO",
            description: "ISO 9001:2015 Certified",
            logo: null
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
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
                        <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-medium">Our Partners</span>
                        <span className="h-px w-8 bg-cyan-500"></span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">
                        Associate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Partners</span>
                    </h3>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Proud to be associated with leading organizations that share our commitment to excellence and innovation in drone technology
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                        >
                            {/* Logo Placeholder */}
                            <div className="aspect-square flex items-center justify-center mb-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-cyan-500/30 transition-all">
                                <Handshake className="w-12 h-12 text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                            </div>

                            {/* Partner Name */}
                            <h4 className="text-white font-bold text-center mb-2 group-hover:text-cyan-400 transition-colors">
                                {partner.name}
                            </h4>

                            {/* Partner Description */}
                            <p className="text-gray-500 text-xs text-center leading-relaxed">
                                {partner.description}
                            </p>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Note about logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-900/20 border border-amber-500/30 rounded-full">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                        <p className="text-sm text-amber-400">
                            Partner logos to be updated with high-resolution images
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
