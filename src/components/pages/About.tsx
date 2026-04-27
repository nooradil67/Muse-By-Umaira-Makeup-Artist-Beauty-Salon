import { motion } from 'motion/react';

export function About() {
  return (
    <div className="w-full pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-serif text-white mb-4">About Muse</h1>
        <div className="h-px w-24 bg-gold-500 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bfc1748b565?q=80&w=2070&auto=format&fit=crop" 
            alt="Interior" 
            className="w-full h-[600px] object-cover rounded-sm border border-white/10"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 text-beige-200/80 leading-relaxed font-light"
        >
          <h2 className="text-3xl font-serif text-white mb-6">Redefining Luxury Beauty in Rawalpindi</h2>
          
          <p>
            Welcome to <strong>Muse By Umaira</strong>, the premier destination for luxury beauty and makeup artistry in Rawalpindi. Located in the heart of Satellite Town (D-Block), we have established ourselves as the best bridal makeup salon in the city, offering an unparalleled experience tailored to your unique beauty.
          </p>
          
          <p>
            Founded by expert makeup artist Umaira, Muse was born out of a passion for enhancing natural beauty and a vision to provide a sanctuary where clients can relax, rejuvenate, and transform. Our philosophy is simple: every client deserves to feel like a masterpiece.
          </p>

          <h3 className="text-xl font-serif text-gold-400 mt-8 mb-4">Our Commitment to Excellence</h3>
          <p>
            As a top-rated hair salon in Rawalpindi, we don't just offer services; we offer an experience. From the moment you walk through our doors, you are treated to premium imported products, impeccable hygiene standards, and a team of certified professionals dedicated to their craft.
          </p>

          <blockquote className="border-l-2 border-gold-500 pl-6 my-8 italic text-white/90 text-lg">
            "Beauty is about being comfortable in your own skin. Our job is simply to illuminate what's already there."
          </blockquote>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-white font-serif text-3xl mb-1">5+</h4>
              <p className="text-xs uppercase tracking-widest text-gold-500">Years Experience</p>
            </div>
            <div>
              <h4 className="text-white font-serif text-3xl mb-1">1000+</h4>
              <p className="text-xs uppercase tracking-widest text-gold-500">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
