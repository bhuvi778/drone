import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Aerial Photographer",
      image: "RS",
      testimonial: "The training was extremely professional and practical. I gained confidence flying drones and understanding regulations. The instructors were patient and knowledgeable. Now I run my own aerial photography business.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Surveying Engineer",
      image: "PP",
      testimonial: "DronePro Academy transformed my career. The surveying and mapping course was comprehensive and hands-on. I'm now working with a leading construction company thanks to their industry connections.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Agricultural Consultant",
      image: "AK",
      testimonial: "The agricultural drone training exceeded my expectations. Learning about crop monitoring and precision spraying has revolutionized my work. The practical sessions were invaluable.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "FPV Racing Pilot",
      image: "SR",
      testimonial: "From zero knowledge to confident FPV pilot in just weeks! The instructors pushed me to improve while ensuring safety. The FPV course is world-class and highly recommended.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Commercial Operator",
      image: "VS",
      testimonial: "Best investment for my drone career. The commercial operations course covered everything from regulations to client management. The placement support was excellent.",
      rating: 5
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
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
          <h2 className="text-sm md:text-base font-semibold text-cyan-500 tracking-widest uppercase mb-3">
            Student Success
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white font-display uppercase">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Students Say</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Hear from our successful graduates who have transformed their careers with DronePro Academy training.
          </p>
        </motion.div>

        {/* Testimonials Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-900/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-900/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const position = (index - activeIndex + testimonials.length) % testimonials.length;
              const isVisible = position < visibleTestimonials;

              return (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 50,
                    scale: isVisible ? 1 : 0.9,
                    display: isVisible ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.5, delay: isVisible ? position * 0.1 : 0 }}
                  whileHover={{ y: -5 }}
                  className={`bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 relative rounded-tr-3xl rounded-bl-3xl overflow-hidden hover:border-cyan-500/50 transition-colors`}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-cyan-500/10">
                    <Quote className="w-16 h-16" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-300 leading-relaxed mb-8 italic font-light relative z-10">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center pt-4 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold mr-4 shadow-lg shadow-cyan-500/20">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-white font-display uppercase tracking-wide text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-cyan-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-cyan-500 w-6' : 'bg-gray-700'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 border-t border-white/10 pt-16"
        >
          <div className="text-center">
            <h4 className="text-xl md:text-2xl font-bold mb-10 text-white font-display uppercase">
              Trusted by Industry Leaders
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              {['DJI', 'Autel', 'Parrot', 'Skydio', 'Yuneec'].map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, opacity: 1, color: '#22d3ee' }}
                  className="text-2xl md:text-4xl font-bold text-gray-500 cursor-pointer transition-all font-display uppercase hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;