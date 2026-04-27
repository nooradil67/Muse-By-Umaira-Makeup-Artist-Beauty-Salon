import { motion } from 'motion/react';

const galleryImages = [
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1974&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1512496015851-a1c8dd634351?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=2080&auto=format&fit=crop", 
];

export function Gallery() {
  return (
    <div className="w-full pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-serif text-white mb-6">Our Portfolio</h1>
        <p className="text-beige-200/70 max-w-2xl mx-auto text-lg leading-relaxed">
          A glimpse into the stunning transformations crafted by Muse. Follow us on Instagram for daily updates of our beautiful brides and clients.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer"
          >
            <img 
              src={src} 
              alt={`Gallery Image ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <span className="px-6 py-2 border border-gold-500/50 text-gold-400 text-sm uppercase tracking-widest backdrop-blur-sm">View Work</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
