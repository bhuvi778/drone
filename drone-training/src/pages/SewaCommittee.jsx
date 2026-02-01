import { motion } from 'framer-motion';
import { Users, Award, GraduationCap, Briefcase, Building2, Heart, Shield, Lightbulb } from 'lucide-react';

const SewaCommittee = () => {
    const committeeMembers = [
        {
            name: "Col. N. P. Singh (Retd.)",
            designation: "Chairman & Military Advisor",
            qualification: "M.Sc. (Defense Studies), B.Tech",
            image: null, // Placeholder for image
            bio: "Colonel N. P. Singh brings over 30 years of distinguished military service with extensive experience in aviation operations and strategic planning. His expertise in military drone operations and tactical deployment has been instrumental in shaping our curriculum to meet international defense standards.",
            expertise: [
                "Military Aviation Operations",
                "Strategic Defense Planning",
                "UAV Tactical Deployment",
                "Leadership & Discipline Training"
            ],
            contribution: "Leads the development of advanced tactical training modules and ensures alignment with defense sector requirements."
        },
        {
            name: "Dr. K. Naik",
            designation: "Academic Director",
            qualification: "Ph.D. in Aerospace Engineering, M.Tech",
            image: null,
            bio: "Dr. K. Naik is a renowned aerospace engineer with over 20 years of academic and research experience. His pioneering work in unmanned aerial systems and autonomous flight technologies has been published in numerous international journals. He ensures our curriculum remains at the cutting edge of drone technology.",
            expertise: [
                "Aerospace Engineering",
                "Autonomous Flight Systems",
                "UAV Design & Development",
                "Research & Innovation"
            ],
            contribution: "Oversees academic curriculum development and ensures technical excellence in all training programs."
        },
        {
            name: "Mr. P. Raut",
            designation: "Chief Operations Officer",
            qualification: "MBA, B.E. (Electronics)",
            image: null,
            bio: "Mr. P. Raut has extensive experience in managing large-scale educational institutions and training facilities. His operational expertise ensures smooth functioning of all training centers and maintains the highest standards of student experience and facility management.",
            expertise: [
                "Operations Management",
                "Educational Administration",
                "Quality Assurance",
                "Facility Management"
            ],
            contribution: "Manages day-to-day operations across all training centers and ensures consistent quality delivery."
        },
        {
            name: "Dr. Shaikh I. A.",
            designation: "Director - Research & Development",
            qualification: "Ph.D. in Electronics & Communication, M.Tech",
            image: null,
            bio: "Dr. Shaikh I. A. specializes in communication systems and sensor technologies for UAVs. His research focuses on enhancing drone capabilities through advanced electronics and communication protocols. He leads our R&D initiatives to keep pace with rapidly evolving drone technologies.",
            expertise: [
                "Electronics & Communication",
                "Sensor Technologies",
                "UAV Communication Systems",
                "Technology Integration"
            ],
            contribution: "Drives innovation through research and development of new training methodologies and technologies."
        },
        {
            name: "Ms. S. Surendran",
            designation: "Director - Regulatory Compliance",
            qualification: "LL.M., B.A. LL.B., DGCA Certified",
            image: null,
            bio: "Ms. S. Surendran is an expert in aviation law and regulatory compliance with specialized knowledge of DGCA regulations and drone legislation. She ensures all our programs meet regulatory requirements and keeps the academy updated with evolving aviation laws and compliance standards.",
            expertise: [
                "Aviation Law",
                "DGCA Regulations",
                "Compliance Management",
                "Legal Advisory"
            ],
            contribution: "Ensures all training programs comply with DGCA regulations and aviation safety standards."
        },
        {
            name: "Mr. Naga Mote",
            designation: "Director - Industry Relations",
            qualification: "MBA (Marketing), B.Tech",
            image: null,
            bio: "Mr. Naga Mote has over 15 years of experience in building industry partnerships and placement programs. His extensive network in the drone industry helps connect our students with leading companies and ensures our curriculum aligns with industry needs.",
            expertise: [
                "Industry Partnerships",
                "Placement & Career Development",
                "Market Analysis",
                "Corporate Relations"
            ],
            contribution: "Develops industry partnerships and ensures student placement opportunities with leading drone companies."
        },
        {
            name: "Mr. P. Kamble",
            designation: "Director - Training & Certification",
            qualification: "M.Sc. (Aviation), DGCA Certified Instructor",
            image: null,
            bio: "Mr. P. Kamble is a certified flight instructor with extensive hands-on experience in drone operations and pilot training. His practical expertise and teaching methodology ensure students receive comprehensive, real-world training that prepares them for professional drone operations.",
            expertise: [
                "Flight Instruction",
                "Practical Training",
                "Certification Programs",
                "Safety Protocols"
            ],
            contribution: "Oversees all practical training programs and certification processes across training centers."
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <Users className="w-12 h-12 text-cyan-500" />
                        <h1 className="text-5xl font-bold text-white">
                            SEWA Governing & Advisory Committee
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Meet the distinguished professionals guiding UAV Pilot Academy towards excellence in drone education and training
                    </p>
                </motion.div>

                {/* SEWA Institutional Information */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-10 hover:border-cyan-500/30 transition-all">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                                <Building2 className="w-8 h-8 text-cyan-400" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">About SEWA</h2>
                                <p className="text-cyan-400 text-sm">Educational Institution Since 2010</p>
                            </div>
                        </div>

                        {/* SEWA Description */}
                        <div className="space-y-6 mb-8">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                <span className="text-cyan-400 font-semibold">SEWA</span> is an educational institution, headquartered in Maharashtra,
                                actively engaged in education and skill development since 2010. SEWA operates in compliance with applicable educational
                                regulations and focuses on delivering quality education and comprehensive skill development.
                            </p>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                UAV Pilot Academy functions under SEWA's academic and governance framework, ensuring institutional transparency,
                                regulatory compliance, and structured educational delivery.
                            </p>
                        </div>

                        {/* Focus Areas */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Award className="w-6 h-6 text-cyan-400" />
                                Core Focus Areas
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Professional education and skill development programs",
                                    "Technical and vocational training initiatives",
                                    "Industry-oriented certification and workforce readiness",
                                    "Innovation-driven learning and applied research"
                                ].map((area, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        className="flex items-start gap-3 bg-slate-900/50 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
                                    >
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-300">{area}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* SEWA Initiatives Since 2010 */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">SEWA's Initiatives Since 2010</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: <GraduationCap className="w-6 h-6" />,
                                        title: "Education & Skill Development",
                                        description: "Comprehensive educational initiatives and skill development programs"
                                    },
                                    {
                                        icon: <Heart className="w-6 h-6" />,
                                        title: "Medical & Health Awareness",
                                        description: "Community health programs and medical awareness campaigns"
                                    },
                                    {
                                        icon: <Users className="w-6 h-6" />,
                                        title: "Women Empowerment",
                                        description: "Dedicated programs for women's education and empowerment"
                                    },
                                    {
                                        icon: <Shield className="w-6 h-6" />,
                                        title: "Road & Public Safety",
                                        description: "Safety awareness and public welfare initiatives"
                                    },
                                    {
                                        icon: <Lightbulb className="w-6 h-6" />,
                                        title: "Innovation & Research",
                                        description: "Innovation-driven learning and community development"
                                    }
                                ].map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                        className="bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                                            {activity.icon}
                                        </div>
                                        <h4 className="text-white font-bold mb-2">{activity.title}</h4>
                                        <p className="text-gray-400 text-sm">{activity.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Governing Committee Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Users className="w-10 h-10 text-cyan-500" />
                        <h2 className="text-4xl font-bold text-white">
                            Governing & Advisory Committee
                        </h2>
                    </div>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Meet the distinguished professionals guiding UAV Pilot Academy towards excellence
                    </p>
                </motion.div>

                {/* Committee Members */}
                <div className="space-y-8">
                    {committeeMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                        >
                            <div className="grid md:grid-cols-[300px_1fr] gap-8 p-8">
                                {/* Profile Section */}
                                <div className="flex flex-col items-center text-center">
                                    {/* Profile Image Placeholder */}
                                    <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/30 flex items-center justify-center mb-6 overflow-hidden">
                                        <Users className="w-20 h-20 text-cyan-400/50" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                    <p className="text-cyan-400 font-semibold mb-3">{member.designation}</p>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>{member.qualification}</span>
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="space-y-6">
                                    {/* Bio */}
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-cyan-400" />
                                            Professional Background
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                                    </div>

                                    {/* Expertise */}
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                            <Award className="w-5 h-5 text-cyan-400" />
                                            Areas of Expertise
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {member.expertise.map((skill, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2 text-gray-400 text-sm bg-slate-900/50 rounded-lg px-4 py-2 border border-cyan-500/20"
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contribution */}
                                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-4">
                                        <h4 className="text-sm font-bold text-cyan-400 mb-2">Key Contribution</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">{member.contribution}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Collective Excellence</h3>
                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Our Governing & Advisory Committee brings together decades of combined experience in military aviation,
                        aerospace engineering, education management, and regulatory compliance. Their collective expertise ensures
                        UAV Pilot Academy maintains the highest standards of training and prepares students for successful careers
                        in the rapidly growing drone industry.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SewaCommittee;
