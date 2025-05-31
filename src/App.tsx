import React, { useState } from 'react';
import Auth from './components/Auth';
import LoveCV from './components/LoveCV/LoveCV';
import { Heart } from 'lucide-react';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleAuthentication = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
      setShowLoader(true);
      // Simulate loading time for dramatic effect
      setTimeout(() => {
        setAuthenticated(true);
        setShowLoader(false);
      }, 2000);
    }
  };

  if (showLoader) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-cyber-black">
        <div className="text-center">
          <Heart className="w-16 h-16 text-cyber-pink animate-pulse mx-auto" />
          <p className="mt-4 text-cyber-blue text-xl neon-text animate-pulse">
            Decrypting heart messages...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black">
      {authenticated ? (
        <LoveCV />
      ) : (
        <Auth onAuthenticate={handleAuthentication} />
      )}
    </div>
  );
}

export default App;