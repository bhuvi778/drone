import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';

const TermsConditions = () => {
    const termsSection = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using the UAV Pilot Academy website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services."
        },
        {
            title: "2. Use of Services",
            content: "Our training programs and services are designed for educational purposes. Students must comply with all applicable laws and regulations, including DGCA guidelines and aviation safety standards. Misuse of training or certification may result in immediate termination of services."
        },
        {
            title: "3. Enrollment and Payment",
            content: "Enrollment in training programs requires completion of registration and payment of applicable fees. All fees are non-refundable unless otherwise stated in our refund policy. Payment must be made through authorized channels only."
        },
        {
            title: "4. Intellectual Property",
            content: "All content, materials, and resources provided by UAV Pilot Academy, including but not limited to course materials, videos, documents, and training aids, are the intellectual property of the academy and protected by copyright laws. Unauthorized reproduction or distribution is strictly prohibited."
        },
        {
            title: "5. Student Conduct",
            content: "Students are expected to maintain professional conduct during training sessions and interactions with instructors and fellow students. Disruptive behavior, harassment, or violation of safety protocols may result in dismissal from the program without refund."
        },
        {
            title: "6. Certification and Compliance",
            content: "Certification is awarded upon successful completion of training requirements and assessments. Students must comply with DGCA regulations and maintain valid certifications. The academy is not responsible for regulatory changes affecting certification validity."
        },
        {
            title: "7. Liability and Insurance",
            content: "Students participate in practical training at their own risk. The academy maintains appropriate insurance coverage, but students are encouraged to obtain personal insurance. The academy is not liable for injuries or damages resulting from student negligence or failure to follow safety protocols."
        },
        {
            title: "8. Privacy and Data Protection",
            content: "Student information is collected and used in accordance with our Privacy Policy. We are committed to protecting your personal data and will not share it with third parties without your consent, except as required by law."
        },
        {
            title: "9. Modifications to Terms",
            content: "UAV Pilot Academy reserves the right to modify these terms and conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the modified terms."
        },
        {
            title: "10. Termination",
            content: "The academy reserves the right to terminate or suspend access to services for violation of these terms, non-payment of fees, or any conduct deemed harmful to the academy or other students."
        },
        {
            title: "11. Governing Law",
            content: "These terms and conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Maharashtra."
        },
        {
            title: "12. Contact Information",
            content: "For questions regarding these terms and conditions, please contact us at legal@uavpilotacademy.com or through any of our training centers listed on our website."
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl"></div>
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
                        <FileText className="w-12 h-12 text-cyan-500" />
                        <h1 className="text-5xl font-bold text-white">
                            Terms & Conditions
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Please read these terms and conditions carefully before using our services
                    </p>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8 mb-12"
                >
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Agreement to Terms</h3>
                            <p className="text-gray-300 leading-relaxed">
                                These Terms and Conditions constitute a legally binding agreement between you and UAV Pilot Academy
                                regarding your use of our website, training programs, and services. By accessing or using our services,
                                you acknowledge that you have read, understood, and agree to be bound by these terms.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Terms Sections */}
                <div className="space-y-6">
                    {termsSection.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{section.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Important Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="mt-12 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-8"
                >
                    <div className="flex items-start gap-4">
                        <FileText className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-lg font-bold text-amber-400 mb-2">Important Notice</h4>
                            <p className="text-gray-300 leading-relaxed">
                                These terms and conditions are subject to change. We recommend reviewing this page periodically to stay
                                informed of any updates. Your continued use of our services after any modifications indicates your acceptance
                                of the updated terms.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Last Updated */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                    className="mt-8 text-center text-gray-500 text-sm"
                >
                    Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </motion.div>
            </div>
        </div>
    );
};

export default TermsConditions;
