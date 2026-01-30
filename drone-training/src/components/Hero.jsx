import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/hero-fleet.png';
import { Crosshair, Award, Cpu, Play, ChevronDown } from 'lucide-react';
import { useRef, Suspense } from 'react';
import DroneScene from './Drone3D';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col justify-end items-center overflow-hidden bg-transparent pb-20">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Simple gradient overlay for text readability, but keeping image clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none"></div>
        <img
          src={heroBg}
          alt="Future Drone Fleet"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        perspective: '1000px',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
      }}></div>

      {/* 3D Flying Drones Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Suspense fallback={null}>
          <DroneScene />
        </Suspense>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-32">

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 relative"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-cyan-500/50"></div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md text-cyan-400 text-sm font-bold tracking-widest mb-6 uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Next Gen Avatar Drone Systems
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter uppercase mb-6 drop-shadow-2xl leading-[0.85]">
            Master<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-700">The Skies</span>
          </h1>

          <p className="text-cyan-100/90 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
            Join the elite ranks of autonomous flight operators.
            <br />
            <span className="text-cyan-400 font-normal">Command the future today.</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <button className="group relative px-12 py-6 bg-cyan-600 hover:bg-cyan-500 text-black font-bold text-lg tracking-widest uppercase skew-x-[-20deg] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]">
            <span className="block skew-x-[20deg]">Initialize Training</span>
          </button>

          <button className="group relative px-12 py-6 bg-transparent border border-cyan-500/50 text-cyan-400 font-bold text-lg tracking-widest uppercase skew-x-[-20deg] hover:bg-cyan-500/10 transition-all">
            <div className="absolute inset-0 bg-white/5 skew-x-[20deg] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="block skew-x-[20deg] flex items-center gap-3">
              <Play className="w-5 h-5 fill-current" />
              Watch Briefing
            </span>
          </button>
        </motion.div>

        {/* Bottom Status Grid (HUD) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8 backdrop-blur-sm bg-black/20">
          <HudItem
            icon={<Crosshair className="w-6 h-6 text-cyan-400" />}
            label="SYSTEM STATUS"
            value="ONLINE"
            color="text-emerald-400"
          />
          <HudItem
            icon={<Cpu className="w-6 h-6 text-cyan-400" />}
            label="AI NAVIGATION"
            value="ACTIVE"
            color="text-cyan-400"
          />
          <HudItem
            icon={<Award className="w-6 h-6 text-cyan-400" />}
            label="CERTIFICATION"
            value="AUTHORIZED"
            color="text-purple-400"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.div>
    </section>
  );
};

const HudItem = ({ icon, label, value, color }) => (
  <div className="flex items-center justify-center gap-4 text-left border-r last:border-r-0 border-white/10 px-4">
    <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
      {icon}
    </div>
    <div>
      <div className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mb-1">{label}</div>
      <div className={`text-xl font-bold font-display tracking-widest ${color} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}>{value}</div>
    </div>
  </div>
)

export default Hero;