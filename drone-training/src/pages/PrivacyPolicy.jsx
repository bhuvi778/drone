import { motion } from 'framer-motion';
import { Shield, Lock, Database, UserX, AlertCircle, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
    const privacyPolicies = [
        {
            icon: <AlertCircle className="w-6 h-6" />,
            title: "Data Accuracy Disclaimer",
            content: "UAV PILOT ACADEMY does not guarantee the accuracy or reliability of website data. While we make every effort to ensure information is current and correct, errors may occur. We reserve the right to correct any inaccuracies without prior notice."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Use at Your Own Risk",
            content: "Users access and use the information at their own risk. We are not responsible for any decisions made based on the information provided on this website."
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Content Modification Rights",
            content: "The academy reserves the right to correct errors or remove content without notice. We may update, modify, or delete any information on the website at our discretion to maintain accuracy and relevance."
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Policy Updates",
            content: "Privacy policies may be updated in the future without prior notification. We encourage users to review this page periodically to stay informed about how we protect your information."
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Data Collection & Usage",
            content: "User data is collected strictly for internal use by UAV Pilot Academy. We collect information necessary to provide our services, improve user experience, and maintain communication with our students and prospective students."
        },
        {
            icon: <UserX className="w-6 h-6" />,
            title: "No Third-Party Sharing",
            content: "No personal data is shared with third parties. Your information remains confidential and is used exclusively for academy operations, training coordination, and communication purposes."
        },
        {
            icon: <AlertCircle className="w-6 h-6" />,
            title: "Third-Party Platform Responsibility",
            content: "The academy is not responsible for data shared by users on third-party platforms. When you interact with external websites or social media platforms, their respective privacy policies apply."
        }
    ];

    const dataWeCollect = [
        "Personal identification information (Name, Email, Phone Number)",
        "Educational background and qualifications",
        "Training program enrollment details",
        "Payment and billing information",
        "Communication preferences",
        "Website usage analytics and cookies"
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <Shield className="w-12 h-12 text-cyan-500" />
                        <h1 className="text-5xl font-bold text-white">
                            Privacy Policy
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
                    </p>
                </motion.div>

                {/* Privacy Policy Sections */}
                <div className="grid grid-cols-1 gap-6 mb-12">
                    {privacyPolicies.map((policy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                        {policy.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-3">{policy.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{policy.content}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Data We Collect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8 mb-12"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Database className="w-7 h-7 text-cyan-400" />
                        Information We Collect
                    </h3>
                    <ul className="space-y-3">
                        {dataWeCollect.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                                className="flex items-start gap-3 text-gray-300"
                            >
                                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Your Rights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Lock className="w-7 h-7 text-cyan-400" />
                        Your Rights
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        You have the right to access, update, or delete your personal information at any time. To exercise these rights or if you have any questions about our privacy practices, please contact us at:
                    </p>
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-cyan-500/20">
                        <p className="text-cyan-400 font-medium">privacy@uavpilotacademy.com</p>
                    </div>
                </motion.div>

                {/* Contact for Privacy Concerns */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8"
                >
                    <h4 className="text-lg font-bold text-cyan-400 mb-3">Questions or Concerns?</h4>
                    <p className="text-gray-300 leading-relaxed">
                        If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact our privacy team.
                        We are committed to addressing your concerns and ensuring your data is handled with the utmost care and security.
                    </p>
                </motion.div>

                {/* Last Updated */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="mt-8 text-center text-gray-500 text-sm"
                >
                    Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
