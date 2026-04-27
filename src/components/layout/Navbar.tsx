import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

export function Navbar({ currentPage, setPage }: NavbarProps) {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-black/20 backdrop-blur-md border-b border-white/10">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-transparent text-[10px] uppercase tracking-widest text-beige-200/70 border-b border-white/5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 hover:text-gold-400 transition-colors cursor-default">
            <MapPin size={12} className="text-gold-500" />
            Satellite Town, D-Block, Rawalpindi
          </span>
          <a href="tel:03355581999" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
            <Phone size={12} className="text-gold-500" />
            0335-5581999
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gold-400 transition-colors">
            <Instagram size={14} />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex flex-col cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <span className="font-serif text-2xl tracking-widest text-white group-hover:text-gold-400 transition-colors">
            MUSE
          </span>
          <span className="text-[10px] tracking-[0.2em] text-gold-500 uppercase">
            By Umaira
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-[11px] uppercase tracking-widest transition-colors duration-300 relative ${
                currentPage === item.id ? 'text-gold-500' : 'text-white/70 hover:text-gold-500'
              }`}
            >
              {item.name}
              {currentPage === item.id && (
                <span className="absolute -bottom-3 left-0 w-full h-px bg-gold-500 mx-auto opacity-50" />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a 
            href={`https://wa.me/923355581999?text=${encodeURIComponent('Hi, I want to book an appointment.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300 text-[11px] uppercase tracking-widest rounded-sm font-medium"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button - simplified for prototype */}
        <div className="md:hidden flex items-center gap-4">
           <a 
            href={`https://wa.me/923355581999?text=${encodeURIComponent('Hi, I want to book an appointment.')}`}
            target="_blank"
            rel="noreferrer"
            className="text-gold-500"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}
