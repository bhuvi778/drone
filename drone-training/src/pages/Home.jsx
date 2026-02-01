import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import TrainingPrograms from '../components/TrainingPrograms';
import Drones from '../components/Drones';
import Certifications from '../components/Certifications';
import WhyChooseUs from '../components/WhyChooseUs';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Professional Background Wrapper for All Sections */}
            <div className="relative overflow-hidden">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Gradient Orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.08, 0.15, 0.08],
                            rotate: [360, 180, 0]
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.08, 0.12, 0.08],
                            x: [0, 150, 0],
                            y: [0, -100, 0]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/3 left-1/3 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                    />

                    {/* Hexagonal Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l26 15v30l-26 15-26-15V15z' fill='none' stroke='%2306b6d4' stroke-width='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} />

                    {/* Floating Particles */}
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1.5, 0]
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                                ease: "easeInOut"
                            }}
                        />
                    ))}

                    {/* Diagonal Grid Lines */}
                    <div className="absolute inset-0 opacity-[0.015]">
                        <div className="h-full w-full" style={{
                            backgroundImage: 'linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)',
                            backgroundSize: '80px 80px'
                        }} />
                    </div>

                    {/* Radial Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/50 to-slate-950/80" />
                </div>

                {/* Content Sections with relative positioning */}
                <div className="relative z-10">
                    <About />
                    <TrainingPrograms />
                    <Drones />
                    <Certifications />
                    <WhyChooseUs />
                    <Partners />
                    <Testimonials />
                    <CTA />
                </div>
            </div>
        </>
    );
};

export default Home;
