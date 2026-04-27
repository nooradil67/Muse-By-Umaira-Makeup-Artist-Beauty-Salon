import { MapPin, Phone, MessageCircle, Instagram, Star } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-3xl tracking-widest text-white">
                MUSE
              </span>
              <span className="text-xs tracking-[0.2em] text-gold-500 uppercase">
                By Umaira
              </span>
            </div>
            <p className="text-beige-200/60 text-sm leading-relaxed mb-6">
              A premium makeup and beauty salon dedicated to crafting flawless looks for your most memorable moments. Experience true luxury in Rawalpindi.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-gold-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-white text-sm font-medium">4.9/5</span>
              <span className="text-beige-200/50 text-sm">(54 Reviews)</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:03355581999" className="flex items-start gap-3 text-beige-200/70 hover:text-gold-400 transition-colors group">
                  <Phone size={18} className="text-gold-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">0335-5581999</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/923355581999`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-beige-200/70 hover:text-gold-400 transition-colors group"
                >
                  <MessageCircle size={18} className="text-gold-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-beige-200/70">
                <MapPin size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  Satellite Town, D-Block,<br/>
                  Near Commercial Market Rd,<br/>
                  Rawalpindi
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {['Bridal Makeup', 'Party Makeup', 'Hair Styling', 'Keratin & Botox', 'Hydra Facial', 'Nail Art'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-beige-200/70 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold-500 rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Business Hours</h4>
            <ul className="space-y-3 text-sm text-beige-200/70">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Sat</span>
                <span className="text-white">11:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-gold-400">By Appointment</span>
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-beige-200/70 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-beige-200/50">
            &copy; {new Date().getFullYear()} Muse By Umaira. All rights reserved.
          </p>
          <p className="text-xs text-beige-200/50">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
