import { motion } from 'framer-motion';
import { AlertTriangle, Info } from 'lucide-react';

const Disclaimer = () => {
    const disclaimerPoints = [
        {
            title: "No Guarantee of Results",
            content: "UAV PILOT ACADEMY makes no representations regarding the results obtained from using its website, services, or products. Individual outcomes may vary based on various factors including dedication, practice, and aptitude."
        },
        {
            title: "Use at Your Own Risk",
            content: "All information on the website is used at the user's own risk. Users are solely responsible for their decisions based on the information provided on this platform."
        },
        {
            title: "Expert Consultation Required",
            content: "Users are advised to contact academy experts for detailed guidance on products and services. Direct consultation ensures personalized recommendations suited to individual needs and goals."
        },
        {
            title: "General Information Only",
            content: "The information provided is for general informational purposes only and does not guarantee accuracy. While we strive to maintain current and correct information, we make no warranties of any kind."
        },
        {
            title: "Limitation of Liability",
            content: "The academy is not liable for any losses or damages arising from the use of the website. This includes, but is not limited to, direct, indirect, incidental, or consequential damages."
        },
        {
            title: "Individual Testimonials",
            content: "Testimonials reflect individual user experiences and opinions. They represent personal achievements and should not be considered as typical results."
        },
        {
            title: "Variable Results",
            content: "Results may vary from user to user, and similar outcomes are not guaranteed. Success depends on multiple factors including individual effort, prior experience, and external circumstances."
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-12 h-12 text-amber-500" />
                        <h1 className="text-5xl font-bold text-white">
                            Disclaimer
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Important information regarding the use of UAV Pilot Academy's website, services, and products
                    </p>
                </motion.div>

                {/* Disclaimer Points */}
                <div className="space-y-6">
                    {disclaimerPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                                        <Info className="w-5 h-5 text-cyan-400" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{point.content}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Important Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-8"
                >
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-lg font-bold text-amber-400 mb-2">Important Notice</h4>
                            <p className="text-gray-300 leading-relaxed">
                                By using this website and our services, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                                If you do not agree with any part of this disclaimer, please discontinue use of our website and services immediately.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Last Updated */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-8 text-center text-gray-500 text-sm"
                >
                    Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </motion.div>
            </div>
        </div>
    );
};

export default Disclaimer;
