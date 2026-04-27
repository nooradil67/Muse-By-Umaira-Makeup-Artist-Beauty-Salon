import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    title: "Bridal & Pre-Bridal",
    desc: "Bespoke bridal packages designed to make you the most beautiful bride.",
    services: [
      { name: "Signature Barat Makeup", price: "Starting Rs. 35,000" },
      { name: "Walima / Reception Makeup", price: "Starting Rs. 30,000" },
      { name: "Mehndi / Mayun Makeup", price: "Starting Rs. 20,000" },
      { name: "Pre-Bridal Grooming Package", price: "Custom" }
    ]
  },
  {
    title: "Makeup & Styling",
    desc: "Flawless finishes for parties, events, and shoots.",
    services: [
      { name: "Party Makeup (with lashes/hair)", price: "Rs. 10,000" },
      { name: "Engagement / Nikkah Makeup", price: "Rs. 20,000" },
      { name: "Model / Shoot Makeup", price: "On Request" },
      { name: "Airbrush Makeup Upgrade", price: "+ Rs. 5,000" }
    ]
  },
  {
    title: "Hair Care & Color",
    desc: "Transformative hair services using premium imported products.",
    services: [
      { name: "Advanced Hair Styling", price: "From Rs. 3,000" },
      { name: "Hair Color (Highlights/Balayage)", price: "From Rs. 8,000" },
      { name: "Keratin Treatment", price: "From Rs. 15,000" },
      { name: "Hair Botox", price: "From Rs. 18,000" }
    ]
  },
  {
    title: "Skin Aesthetics",
    desc: "Rejuvenating treatments for healthy, glowing skin.",
    services: [
      { name: "Signature Hydra Facial", price: "Rs. 8,000" },
      { name: "Whitening / Glow Facial", price: "Rs. 5,000" },
      { name: "Deep Cleansing", price: "Rs. 3,000" },
      { name: "Dermaplaning", price: "Rs. 4,000" }
    ]
  }
];

export function Services() {
  return (
    <div className="w-full pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Service Menu</h1>
        <p className="text-beige-200/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore our extensive range of luxury treatments. Prices are indicative and may vary based on specific requirements and product usage.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {serviceCategories.map((category, idx) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-8 md:p-10"
          >
            <h2 className="text-3xl font-serif text-gold-400 mb-3">{category.title}</h2>
            <p className="text-sm text-beige-200/50 mb-8 border-b border-white/10 pb-6">{category.desc}</p>
            
            <ul className="space-y-6">
              {category.services.map((item) => (
                <li key={item.name} className="flex justify-between items-end group">
                  <div className="flex-1">
                    <span className="text-white font-medium group-hover:text-gold-300 transition-colors">{item.name}</span>
                    <div className="h-px border-b border-dashed border-white/20 w-full mt-2 group-hover:border-gold-500/50 transition-colors" />
                  </div>
                  <span className="text-gold-500 text-sm font-medium pl-4 shrink-0">{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-white/5">
               <a 
                  href={`https://wa.me/923355581999?text=${encodeURIComponent(`Hi, I would like to inquire about ${category.title} services.`)}`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-beige-200 hover:text-white transition-colors"
                >
                  Inquire via WhatsApp <ArrowRight size={14} className="text-green-500" />
                </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
