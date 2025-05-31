import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Fingerprint, Shield, AlertTriangle } from 'lucide-react';
import ParticleBackground from './Animations/ParticleBackground';

interface AuthProps {
  onAuthenticate: (isAuthenticated: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthenticate }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [denied, setDenied] = useState(false);

  // Remplacez par le nom réel de la personne
  const targetFirstName = 'zeynep';
  const targetLastName = 'cakir';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (
      firstName.trim().toLowerCase() === targetFirstName.toLowerCase() &&
      lastName.trim().toLowerCase() === targetLastName.toLowerCase()
    ) {
      setShowAlert(true);
    } else {
      setDenied(true);
      setTimeout(() => {
        window.close();
      }, 3000);
    }
  };

  const handleAccept = () => {
    setShowAlert(false);
    onAuthenticate(true);
  };

  const handleReject = () => {
    window.close();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-md p-8 rounded-lg bg-cyber-gray/80 backdrop-blur-sm border border-cyber-blue"
      >
        <div className="text-center mb-8">
          <Lock className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
          <h1 className="text-3xl font-bold neon-text">Accès Sécurisé</h1>
          <p className="text-gray-300 mt-2">Authentification requise</p>
        </div>

        {denied ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-cyber-dark border border-cyber-pink rounded-lg text-center"
          >
            <AlertTriangle className="w-12 h-12 text-cyber-pink mx-auto mb-2" />
            <p className="text-xl font-bold neon-text-pink">Accès Refusé</p>
            <p className="mt-2">Tu n'es pas sa reine 👑</p>
            <p className="mt-2 text-sm text-gray-400">Cette page se fermera automatiquement...</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                Prénom
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="cyber-input w-full"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                Nom
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="cyber-input w-full"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full cyber-button flex items-center justify-center"
            >
              <Fingerprint className="mr-2 h-5 w-5" />
              Vérifier l'identité
            </button>
            
            <div className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center">
              <Shield className="h-4 w-4 mr-1" />
              <span>Connexion sécurisée et privée</span>
            </div>
          </form>
        )}
      </motion.div>

      {/* Alerte d'authentification */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-cyber-dark p-8 rounded-lg border border-cyber-blue max-w-md w-full"
          >
            <h2 className="text-xl font-bold mb-4 neon-text">Message Important</h2>
            <p className="mb-6 text-gray-300">
              Peu importe ce que tu t'apprêtes à lire, j'espère que cela ne changera rien entre nous. 
              Ton amitié est précieuse.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleAccept} 
                className="cyber-button flex-1"
              >
                Accepter et continuer
              </button>
              <button 
                onClick={handleReject} 
                className="cyber-button-pink flex-1"
              >
                Refuser
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Auth;