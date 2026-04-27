import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="w-full pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-serif text-white mb-6">Get in Touch</h1>
        <p className="text-beige-200/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Book your luxury salon experience today. We recommend booking bridal and party makeup services at least a month in advance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 space-y-10"
        >
          <div className="glass-panel p-8">
            <h3 className="text-xl font-serif text-gold-400 mb-6 border-b border-white/10 pb-4">Salon Information</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold-500 mt-1 shrink-0" size={20} />
                <div className="text-sm">
                  <p className="text-white font-medium mb-1">MUSE By Umaira</p>
                  <p className="text-beige-200/70 leading-relaxed">Satellite Town, D-Block<br/>Near Commercial Market Road<br/>Rawalpindi, Pakistan</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-gold-500 mt-1 shrink-0" size={20} />
                <div className="text-sm">
                  <p className="text-white font-medium mb-1">Phone</p>
                  <a href="tel:03355581999" className="text-beige-200/70 hover:text-gold-400 transition-colors">0335-5581999</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="text-gold-500 mt-1 shrink-0" size={20} />
                <div className="text-sm w-full">
                  <p className="text-white font-medium mb-1">Hours</p>
                  <div className="flex justify-between text-beige-200/70 border-b border-white/5 pb-1 mb-1">
                    <span>Mon - Sat</span> <span>11 AM - 8 PM</span>
                  </div>
                  <div className="flex justify-between text-beige-200/70">
                    <span>Sunday</span> <span className="text-gold-500">Appointments Only</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <a 
            href="https://wa.me/923355581999" target="_blank" rel="noreferrer"
            className="flex items-center justify-between w-full p-6 bg-gradient-to-r from-green-900/40 to-black border border-green-500/20 hover:border-green-500/50 transition-all rounded-sm group"
          >
            <div>
              <p className="text-white font-medium text-lg mb-1 group-hover:text-green-400 transition-colors">Chat on WhatsApp</p>
              <p className="text-sm text-beige-200/60">Instant replies during business hours</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
              <MessageCircle />
            </div>
          </a>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7"
        >
          <form className="glass-panel p-8" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-serif text-white mb-8">Send an Inquiry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-beige-200/70">Full Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Jane Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-beige-200/70">Phone / WhatsApp</label>
                <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="03XXXXXXXXX" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-beige-200/70">Service Required</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option>Bridal Makeup</option>
                  <option>Party Makeup</option>
                  <option>Hair Services</option>
                  <option>Skin Aesthetics</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-beige-200/70">Preferred Date</label>
                <input type="date" className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none" style={{ colorScheme: 'dark' }} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-beige-200/70">Additional Details</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Tell us more about your requirements..."></textarea>
              </div>
            </div>
            
            <button className="mt-8 w-full py-4 bg-gradient-to-r from-gold-500 to-rose-500 text-black transition-all uppercase tracking-widest text-[11px] font-bold flex items-center justify-center gap-2 group rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-[1.02]">
              Submit Request <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

    </div>
  );
}
