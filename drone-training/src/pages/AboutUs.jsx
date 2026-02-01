import { motion } from 'framer-motion';
import { Target, Eye, Building2, Users, Award, Heart, Shield, Lightbulb, GraduationCap, Briefcase, Zap, Globe, TrendingUp, CheckCircle2, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const sewaActivities = [
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Education & Skill Development",
            description: "Comprehensive educational initiatives and skill development programs designed to empower individuals with industry-relevant knowledge and practical expertise",
            stats: "10,000+ Students Trained"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Medical & Health Awareness",
            description: "Community health programs and medical awareness campaigns promoting wellness, preventive healthcare, and public health education across communities",
            stats: "50+ Health Camps"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Women Empowerment",
            description: "Dedicated programs for women's education, skill development, and empowerment initiatives fostering gender equality and economic independence",
            stats: "3,000+ Women Empowered"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Road & Public Safety",
            description: "Safety awareness campaigns and public welfare initiatives promoting road safety, accident prevention, and community safety consciousness",
            stats: "100+ Safety Drives"
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Innovation & Research",
            description: "Innovation-driven learning, applied research, and community development projects fostering technological advancement and sustainable growth",
            stats: "25+ Research Projects"
        }
    ];

    const sewaFocusAreas = [
        {
            title: "Professional Education & Skill Development",
            description: "Delivering industry-aligned professional education programs and comprehensive skill development initiatives that prepare individuals for successful careers in emerging technologies and traditional sectors alike.",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            title: "Technical & Vocational Training",
            description: "Providing hands-on technical training and vocational education programs that bridge the gap between theoretical knowledge and practical industry requirements, ensuring workforce readiness.",
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: "Industry-Oriented Certification & Workforce Readiness",
            description: "Offering industry-recognized certification programs and comprehensive workforce development initiatives that align with current market demands and future industry trends.",
            icon: <Award className="w-6 h-6" />
        },
        {
            title: "Innovation-Driven Learning & Applied Research",
            description: "Fostering a culture of innovation through research-oriented learning, practical application of emerging technologies, and collaborative projects that address real-world challenges.",
            icon: <Rocket className="w-6 h-6" />
        }
    ];

    const achievements = [
        { number: "15+", label: "Years of Excellence", icon: <TrendingUp className="w-6 h-6" /> },
        { number: "10,000+", label: "Students Trained", icon: <Users className="w-6 h-6" /> },
        { number: "6", label: "Training Centers", icon: <Globe className="w-6 h-6" /> },
        { number: "100%", label: "DGCA Aligned", icon: <CheckCircle2 className="w-6 h-6" /> }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [360, 180, 0]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1],
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                />

                {/* Hexagonal Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l26 15v30l-26 15-26-15V15z' fill='none' stroke='%2306b6d4' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="h-full w-full" style={{
                        backgroundImage: 'linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Header with Drone Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="inline-flex items-center justify-center mb-8"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl opacity-50 rounded-full"></div>
                            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl border border-cyan-500/30">
                                <Rocket className="w-16 h-16 text-cyan-400" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-6xl md:text-7xl font-bold mb-6"
                    >
                        <span className="text-white">About </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            UAV Pilot Academy
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
                        <Sparkles className="w-5 h-5 text-cyan-400" />
                        <p className="text-xl text-cyan-400 font-semibold">Leading the Future of Drone Education</p>
                        <Sparkles className="w-5 h-5 text-cyan-400" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
                    >
                        Pioneering excellence in unmanned aerial vehicle education through cutting-edge technology,
                        world-class infrastructure, and unwavering commitment to safety, innovation, and professional development
                    </motion.p>
                </motion.div>

                {/* Achievement Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all">
                                <div className="flex justify-center mb-3 text-cyan-400">
                                    {achievement.icon}
                                </div>
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                                    {achievement.number}
                                </div>
                                <div className="text-sm text-gray-400 font-medium">{achievement.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mission & Vision - Enhanced */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-10 hover:border-cyan-400/50 transition-all overflow-hidden">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-tl-full"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30">
                                        <Target className="w-10 h-10 text-cyan-400" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-white">Our Mission</h2>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        To empower the next generation of drone professionals through comprehensive,
                                        <span className="text-cyan-400 font-semibold"> discipline-driven training programs</span> that emphasize
                                        <span className="text-cyan-400 font-semibold"> aviation safety</span>,
                                        <span className="text-cyan-400 font-semibold"> regulatory compliance</span>, and
                                        <span className="text-cyan-400 font-semibold"> application-based learning</span>.
                                    </p>

                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        We operate multiple state-of-the-art training centers across India, ensuring accessibility and
                                        excellence in drone education that is fully aligned with <span className="text-cyan-400 font-semibold">DGCA standards</span> and
                                        <span className="text-cyan-400 font-semibold"> international industry best practices</span>.
                                    </p>

                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        Our mission extends beyond technical training to cultivate responsible, skilled, and safety-conscious
                                        drone operators who contribute meaningfully to India's rapidly growing UAV industry and technological advancement.
                                    </p>
                                </div>

                                {/* Mission Highlights */}
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    {['Safety First', 'DGCA Aligned', 'Hands-On Training', 'Industry Ready'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400 bg-slate-900/50 rounded-lg px-3 py-2 border border-cyan-500/20">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl border border-blue-500/30 rounded-3xl p-10 hover:border-blue-400/50 transition-all overflow-hidden">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
                                        <Eye className="w-10 h-10 text-blue-400" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-white">Our Vision</h2>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        To establish ourselves as <span className="text-blue-400 font-semibold">India's most trusted and comprehensive
                                            drone training institution</span>, recognized nationally and internationally for producing
                                        <span className="text-blue-400 font-semibold"> highly skilled, certified, and responsible drone operators</span> who
                                        set industry benchmarks.
                                    </p>

                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        We envision a future where UAV Pilot Academy graduates are the preferred choice for employers across
                                        diverse sectors including agriculture, surveillance, cinematography, infrastructure, defense, and emergency services.
                                    </p>

                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        Through continuous innovation, research, and adherence to the highest standards of
                                        <span className="text-blue-400 font-semibold"> safety, compliance, and professionalism</span>, we aim to
                                        contribute significantly to the advancement of India's drone ecosystem and technological sovereignty.
                                    </p>
                                </div>

                                {/* Vision Highlights */}
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    {['Industry Leader', 'Innovation Hub', 'Global Standards', 'Career Excellence'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400 bg-slate-900/50 rounded-lg px-3 py-2 border border-blue-500/20">
                                            <Sparkles className="w-4 h-4 text-blue-400" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SEWA Details Section - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-20"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 hover:border-cyan-500/30 transition-all overflow-hidden">
                            {/* Animated Background Pattern */}
                            <motion.div
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%'],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    ease: 'linear'
                                }}
                                className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l26 15v30l-26 15-26-15V15z' fill='none' stroke='%2306b6d4' stroke-width='2'/%3E%3C/svg%3E")`,
                                    backgroundSize: '60px 60px'
                                }}
                            />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-center gap-6 mb-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl flex items-center justify-center border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                                    >
                                        <Building2 className="w-10 h-10 text-cyan-400" />
                                    </motion.div>
                                    <div>
                                        <h2 className="text-5xl font-bold text-white mb-2">About SEWA</h2>
                                        <div className="flex items-center gap-3">
                                            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                                            <p className="text-cyan-400 text-lg font-semibold">Educational Excellence Since 2010</p>
                                        </div>
                                    </div>
                                </div>

                                {/* SEWA Description */}
                                <div className="space-y-6 mb-12">
                                    <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-l-4 border-cyan-500 rounded-r-2xl p-6">
                                        <p className="text-gray-200 leading-relaxed text-lg">
                                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SEWA</span> is a distinguished
                                            educational institution headquartered in Maharashtra, actively engaged in comprehensive education and skill development initiatives since 2010.
                                            Operating in full compliance with applicable educational regulations and government frameworks, SEWA has established itself as a trusted
                                            name in professional education and community development.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-l-4 border-blue-500 rounded-r-2xl p-6">
                                        <p className="text-gray-200 leading-relaxed text-lg">
                                            UAV Pilot Academy operates under SEWA's robust academic and governance framework, benefiting from over a decade of institutional experience
                                            in educational excellence. This relationship ensures <span className="text-blue-400 font-semibold">institutional transparency</span>,
                                            <span className="text-blue-400 font-semibold"> regulatory compliance</span>, and
                                            <span className="text-blue-400 font-semibold"> structured educational delivery</span> that meets the highest standards of quality and professionalism.
                                        </p>
                                    </div>
                                </div>

                                {/* Focus Areas - Enhanced Grid */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-8">
                                        <Award className="w-8 h-8 text-cyan-400" />
                                        <h3 className="text-3xl font-bold text-white">Core Focus Areas</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {sewaFocusAreas.map((area, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                                whileHover={{ scale: 1.02, y: -5 }}
                                                className="relative group"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                                                <div className="relative bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                                                    <div className="flex items-start gap-4">
                                                        <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                                                            {area.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                                                            <p className="text-gray-400 leading-relaxed">{area.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* SEWA Initiatives - Enhanced Cards */}
                                <div>
                                    <div className="flex items-center gap-3 mb-8">
                                        <Sparkles className="w-8 h-8 text-purple-400" />
                                        <h3 className="text-3xl font-bold text-white">SEWA's Transformative Initiatives Since 2010</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {sewaActivities.map((activity, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                                whileHover={{ scale: 1.05, y: -10 }}
                                                className="relative group"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                                                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all h-full">
                                                    <div className="flex flex-col h-full">
                                                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform border border-cyan-500/30">
                                                            {activity.icon}
                                                        </div>
                                                        <h4 className="text-xl font-bold text-white mb-3">{activity.title}</h4>
                                                        <p className="text-gray-400 leading-relaxed mb-4 flex-1">{activity.description}</p>
                                                        <div className="pt-4 border-t border-cyan-500/20">
                                                            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                                                                <TrendingUp className="w-4 h-4" />
                                                                <span className="text-sm">{activity.stats}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Governing Committee CTA - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="relative group mb-16"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                    <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-12 text-center overflow-hidden">
                        {/* Animated Background */}
                        <motion.div
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
                                backgroundSize: '200% 100%'
                            }}
                        />

                        <div className="relative z-10">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="inline-flex items-center justify-center mb-6"
                            >
                                <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl border border-cyan-500/30">
                                    <Users className="w-16 h-16 text-cyan-400" />
                                </div>
                            </motion.div>

                            <h3 className="text-4xl font-bold text-white mb-4">Meet Our Distinguished Governing Committee</h3>
                            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                                Discover the exceptional professionals and industry leaders who guide UAV Pilot Academy towards
                                excellence in drone education, safety standards, and technological innovation
                            </p>

                            <Link to="/sewa-committee">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl font-bold text-white text-lg relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <Briefcase className="w-6 h-6 relative z-10" />
                                    <span className="relative z-10">View Governing Committee</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="relative z-10"
                                    >
                                        →
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Institutional Credentials - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: "ISO 9001:2015", sublabel: "Quality Certified", gradient: "from-cyan-500 to-blue-500" },
                        { label: "MSME", sublabel: "Registered", gradient: "from-blue-500 to-purple-500" },
                        { label: "Since 2010", sublabel: "15+ Years", gradient: "from-purple-500 to-pink-500" },
                        { label: "DGCA", sublabel: "Fully Aligned", gradient: "from-pink-500 to-cyan-500" }
                    ].map((credential, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.7 + index * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${credential.gradient} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all">
                                <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${credential.gradient} mb-2`}>
                                    {credential.label}
                                </div>
                                <div className="text-sm text-gray-400 font-medium">{credential.sublabel}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
