import { motion } from 'motion/react';
import { Star, MapPin, ArrowRight, Check, MessageCircle } from 'lucide-react';

const services = [
  { title: "Bridal Makeup", desc: "Signature luxurious bridal looks tailored for your big day.", img: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=2070&auto=format&fit=crop" },
  { title: "Party Makeup", desc: "Flawless glam for events, parties, and special occasions.", img: "https://images.unsplash.com/photo-1512496015851-a1c8dd634351?q=80&w=2070&auto=format&fit=crop" },
  { title: "Hair Styling", desc: "Expert cutting, coloring, keratin, and modern styling.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" },
  { title: "Premium Skincare", desc: "Hydra facials, deep cleansing, and glowing skin treatments.", img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop" },
];

export function Home({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
          <div className="w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <span className="flex text-yellow-500 text-[8px] sm:text-[10px]">★★★★★</span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/60">4.9/5 Rating from 54+ Verified Clients</span>
              </div>
              <h1 className="text-[48px] md:text-[64px] font-serif text-white leading-[1.05] tracking-tight mb-6">
                Premium <span className="text-gold-500 italic">Beauty</span> & <br/>Bridal Experience
              </h1>
              <p className="text-lg text-white/50 mb-10 max-w-[440px] leading-relaxed font-light">
                Luxury hair, makeup, skincare and bridal services crafted to make you look your absolute best in Rawalpindi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/923355581999" 
                  target="_blank" rel="noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-gold-500 to-rose-500 text-black font-bold uppercase text-xs tracking-widest rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] text-center transition-all hover:scale-105"
                >
                  View Services
                </a>
                <button 
                  onClick={() => setPage('gallery')}
                  className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-bold uppercase tracking-widest text-xs rounded-sm transition-all text-center"
                >
                  Our Gallery
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="bg-white/5 border-y border-white/5 py-10 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 items-center justify-center text-center">
            
            <div className="flex flex-col items-center">
              <p className="text-3xl font-serif text-gold-500 mb-1">12+</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Years Exp</p>
            </div>
            
            <div className="flex flex-col items-center">
              <p className="text-3xl font-serif text-gold-500 mb-1">5k+</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Transformations</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-3xl font-serif text-gold-500 mb-1">#1</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Salon Location</p>
            </div>
            
            <div className="flex flex-col items-center">
              <p className="text-3xl font-serif text-gold-500 mb-1">100%</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Hygiene Guard</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section className="py-24 bg-black relative">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-sans tracking-[0.2em] text-gold-500 uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Signature Services</h3>
            <p className="text-beige-200/70 font-light">
              We offer a curated selection of premium beauty treatments, from flawless bridal makeup to advanced skin aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative h-[400px] overflow-hidden cursor-pointer rounded-2xl border border-white/10"
                onClick={() => setPage('services')}
              >
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl font-serif text-white mb-2">{service.title}</h4>
                    <p className="text-sm text-beige-200/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setPage('services')}
              className="inline-flex items-center gap-2 text-white hover:text-gold-400 transition-colors uppercase tracking-widest text-sm border-b border-gold-500/30 hover:border-gold-500 pb-1"
            >
              View Full Menu <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-black border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-sm font-sans tracking-[0.2em] text-gold-500 uppercase mb-4">Client Love</h2>
             <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Real Experiences</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ayesha K.", review: "Umaira did my bridal makeup and I was absolutely stunned. The base was flawless and lasted all night. Highly recommend Muse for your big day!" },
              { name: "Fatima S.", review: "Best salon in Rawalpindi by far. Their hygienic standards and premium products make such a difference. Had a wonderful hydra facial." },
              { name: "Zainab Ali", review: "Got my party makeup done. They understood exactly what I wanted. Very elegant and not overdone. The staff is so polite and professional." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 relative group"
              >
                <div className="flex text-gold-500 mb-6">
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                <p className="text-beige-200/80 mb-8 italic leading-relaxed text-sm">"{t.review}"</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gold-400 font-serif text-xl border border-white/5">{t.name[0]}</div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-beige-200/50 uppercase tracking-widest">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (PARALLAX-ISH) */}
      <section className="py-24 relative overflow-hidden bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gold-500/10 blur-2xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bfc1748b565?q=80&w=2070&auto=format&fit=crop" 
              alt="Salon Details" 
              className="relative w-full h-[600px] object-cover border border-white/10"
            />
            {/* Floating Glass Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 glass-panel p-6 max-w-[200px] animate-bounce" style={{animationDuration: '4s'}}>
              <p className="text-gold-400 font-serif text-4xl mb-1">Top</p>
              <p className="text-white text-sm font-medium">Rated Salon in Rawalpindi</p>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-sm font-sans tracking-[0.2em] text-rose-400 uppercase mb-4">The Muse Difference</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">Elevating Beauty to an Art Form.</h3>
            
            <div className="space-y-6">
              {[
                { title: "Certified Professionals", desc: "Our team consists of highly trained and certified makeup artists & stylists." },
                { title: "Premium Imported Products", desc: "We only use top-tier, authentic international brands for all treatments." },
                { title: "Immaculate Hygiene", desc: "Tools are stringently sterilized and spaces deeply sanitized for your safety." },
                { title: "Expert Bridal Team", desc: "Specialized team capable of handling multiple brides with flawless execution." }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-colors"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">{item.title}</h4>
                    <p className="text-beige-200/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2111&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="Background" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Ready for your transformation?</h2>
          <p className="text-beige-200/80 mb-10 text-lg">Experience the highest standard of beauty services. Secure your spot today.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/923355581999" 
              target="_blank" rel="noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white uppercase tracking-widest text-[11px] font-bold flex items-center justify-center gap-3 rounded-sm hover:-translate-y-1 shadow-[0_10px_20px_rgba(37,211,102,0.2)] transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
            <a 
              href="tel:03355581999"
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white uppercase tracking-widest text-[11px] font-bold flex items-center justify-center gap-3 rounded-sm transition-all text-center"
            >
               Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
