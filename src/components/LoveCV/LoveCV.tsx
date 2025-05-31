import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import FloatingElements from '../Animations/FloatingElements';
import AboutMe from './AboutMe';
import WhyILikeYou from './WhyILikeYou';
import OurFuture from './OurFuture';
import ResponseForm from '../ResponseForm';
import { Heart, User, Stars, Calendar } from 'lucide-react';

const LoveCV: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const responseFormRef = useRef<HTMLDivElement>(null);
  
  const scrollToResponseForm = () => {
    responseFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <FloatingElements type="mixed" count={20} />
      
      {/* Header */}
      <header className="pt-10 pb-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-elegant text-cyber-blue neon-text mb-2">
            Mon cœur pour toi
          </h1>
          <p className="text-xl text-gray-300">
            Une déclaration sincère et numérique
          </p>
        </motion.div>
      </header>
      
      {/* Navigation */}
      <nav className="sticky top-0 bg-cyber-dark/80 backdrop-blur-sm border-b border-cyber-blue z-20 py-3">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-2 md:space-x-8">
            <li>
              <button
                onClick={() => setActiveSection('about')}
                className={`px-3 py-2 rounded-md flex items-center text-sm md:text-base transition-all ${
                  activeSection === 'about' 
                    ? 'bg-cyber-blue/20 text-cyber-blue neon-text' 
                    : 'text-gray-400 hover:text-cyber-blue'
                }`}
              >
                <User className="w-4 h-4 mr-1" />
                <span>Moi</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('why')}
                className={`px-3 py-2 rounded-md flex items-center text-sm md:text-base transition-all ${
                  activeSection === 'why' 
                    ? 'bg-cyber-purple/20 text-cyber-purple neon-text-purple' 
                    : 'text-gray-400 hover:text-cyber-purple'
                }`}
              >
                <Heart className="w-4 h-4 mr-1" />
                <span>Toi et Moi</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('future')}
                className={`px-3 py-2 rounded-md flex items-center text-sm md:text-base transition-all ${
                  activeSection === 'future' 
                    ? 'bg-cyber-pink/20 text-cyber-pink neon-text-pink' 
                    : 'text-gray-400 hover:text-cyber-pink'
                }`}
              >
                <Stars className="w-4 h-4 mr-1" />
                <span>Notre Avenir</span>
              </button>
            </li>
            <li>
              <button
                onClick={scrollToResponseForm}
                className={`px-3 py-2 rounded-md flex items-center text-sm md:text-base transition-all
                  text-gray-400 hover:text-white hover:bg-steel-blue/20`}
              >
                <Calendar className="w-4 h-4 mr-1" />
                <span>Répondre</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 relative z-10">
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'why' && <WhyILikeYou />}
        {activeSection === 'future' && <OurFuture />}
        
        {/* Response Form */}
        <div ref={responseFormRef} className="mt-20 mb-10">
          <ResponseForm />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 bg-cyber-dark border-t border-cyber-blue/30 text-center text-sm text-gray-400">
        <p>Créé avec amour et respect. 2025</p>
        <p className="mt-2">
          Cette page est privée et n'est pas référencée publiquement.
        </p>
      </footer>
    </div>
  );
};

export default LoveCV;