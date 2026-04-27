import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Gallery } from './components/pages/Gallery';
import { Contact } from './components/pages/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black w-full text-beige-100 font-sans selection:bg-gold-500 selection:text-black relative overflow-hidden flex flex-col">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-500 opacity-[0.07] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-500 opacity-[0.05] rounded-full blur-[100px]"></div>
      </div>

      <Navbar currentPage={currentPage} setPage={(page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
      
      <main className="w-full relative z-10 flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

