import React from 'react';
import { motion } from 'framer-motion';
import { Map, Compass, Zap, HeartHandshake, Mountain, Sparkles } from 'lucide-react';

const OurFuture: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-12 text-center">
        <h2 className="text-3xl font-bold neon-text-pink mb-4">Notre Avenir</h2>
        <p className="text-xl text-gray-300 font-elegant">
          Une vision de ce que nous pourrions construire ensemble
        </p>
      </motion.div>
      
      {/* Relationship Vision */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-pink/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Compass className="text-cyber-pink mr-2" /> 
          Ma vision de notre relation
        </h3>
        <p className="mb-4 text-gray-300">
          J'envisage une relation fondée sur le respect mutuel, où chacun de nous peut s'épanouir 
          tout en grandissant ensemble. Une relation où la communication est ouverte et honnête, 
          où nous pouvons partager nos joies comme nos préoccupations sans crainte d'être jugés.
        </p>
        <p className="mb-4 text-gray-300">
          Je souhaite un équilibre où nous nous soutenons dans nos projets individuels tout en 
          construisant des rêves communs. Une relation qui nous élève, nous inspire, et nous 
          pousse à devenir nos meilleures versions.
        </p>
        <p className="text-gray-300">
          Je veux que nous soyons des partenaires dans tous les sens du terme - complices dans 
          les moments de bonheur, alliés face aux défis, et présents l'un pour l'autre dans 
          le quotidien comme dans les grandes étapes de la vie.
        </p>
      </motion.div>
      
      {/* Short Term Projects */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-pink/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Zap className="text-cyber-pink mr-2" /> 
          Projets à court terme
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-cyber-black/50 rounded-lg border border-cyber-pink/20 hover:border-cyber-pink/70 transition-all">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="text-cyber-pink mr-2">•</span> 
              Apprendre à mieux nous connaître
            </h4>
            <p className="text-gray-300 text-sm">
              Je voudrais prendre le temps de découvrir toutes tes facettes, tes goûts, tes rêves,
              et te partager les miens. Peut-être à travers des sorties thématiques où chacun ferait 
              découvrir à l'autre un aspect de son univers?
            </p>
          </div>
          
          <div className="p-4 bg-cyber-black/50 rounded-lg border border-cyber-pink/20 hover:border-cyber-pink/70 transition-all">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="text-cyber-pink mr-2">•</span> 
              Créer des souvenirs ensemble
            </h4>
            <p className="text-gray-300 text-sm">
              J'aimerais que nous vivions des expériences mémorables, comme [suggestion d'activité], 
              ou pourquoi pas un weekend d'évasion à [lieu]. Des moments précieux qui construiraient 
              notre histoire commune.
            </p>
          </div>
          
          <div className="p-4 bg-cyber-black/50 rounded-lg border border-cyber-pink/20 hover:border-cyber-pink/70 transition-all">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="text-cyber-pink mr-2">•</span> 
              Établir des traditions
            </h4>
            <p className="text-gray-300 text-sm">
              Je trouve beau l'idée de créer nos propres rituels - peut-être un jour spécial 
              dans la semaine réservé à nous deux, ou une façon particulière de célébrer les 
              petites victoires du quotidien.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Long Term Vision */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-pink/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Mountain className="text-cyber-pink mr-2" /> 
          Vision à long terme
        </h3>
        <p className="mb-6 text-gray-300">
          Sur le long terme, j'imagine une relation qui évolue naturellement, sans précipitation 
          mais avec une direction claire. Je nous vois construire une vie ensemble où chaque 
          décision importante serait prise à deux, en tenant compte des aspirations de chacun.
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-cyber-black/50 rounded-lg border border-cyber-pink/20">
            <h4 className="font-bold mb-2">Projets de vie</h4>
            <p className="text-gray-300 text-sm">
              J'aimerais que nous puissions réaliser nos ambitions professionnelles tout en créant un 
              foyer chaleureux et stable. Un endroit qui nous ressemble, où nous nous sentirions 
              pleinement nous-mêmes et en sécurité.
            </p>
          </div>
          
          <div className="p-4 bg-cyber-black/50 rounded-lg border border-cyber-pink/20">
            <h4 className="font-bold mb-2">Voyages et découvertes</h4>
            <p className="text-gray-300 text-sm">
              Je rêve d'explorer le monde avec toi, de découvrir des cultures différentes, 
              et de vivre des aventures qui nous enrichiraient et renforceraient notre lien. 
              Peut-être un grand voyage à [destination] qui nous fait rêver tous les deux?
            </p>
          </div>
          
          <div className="p-4 bg-cyber-black/50 rounded-lg border border-cyber-pink/20">
            <h4 className="font-bold mb-2">Grandir ensemble</h4>
            <p className="text-gray-300 text-sm">
              Plus que tout, je veux que nous puissions évoluer ensemble, nous soutenir dans 
              nos transformations personnelles, et nous réjouir de voir l'autre s'épanouir. 
              Être des partenaires de vie dans tous les sens du terme.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Commitment */}
      <motion.div 
        variants={itemVariants} 
        className="p-6 bg-cyber-gray/30 rounded-lg border border-cyber-pink/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <HeartHandshake className="text-cyber-pink mr-2" /> 
          Mon engagement envers toi
        </h3>
        <p className="mb-4 text-gray-300">
          Si tu décides d'entreprendre ce chemin avec moi, je te promets d'être présent, 
          attentif, et engagé. Je m'engage à communiquer avec honnêteté, à respecter tes 
          limites et tes besoins, et à faire les efforts nécessaires pour que notre relation 
          soit épanouissante.
        </p>
        <p className="mb-4 text-gray-300">
          Je te promets de ne jamais tenir notre relation pour acquise, de chérir chaque moment 
          passé ensemble, et de travailler constamment à être un meilleur partenaire pour toi.
        </p>
        <div className="mt-6 text-center">
          <p className="text-cyber-pink font-elegant text-xl neon-text-pink">
            <Sparkles className="inline-block mr-1" />
            "Je suis prêt à construire quelque chose de beau avec toi, pas à pas, jour après jour."
            <Sparkles className="inline-block ml-1" />
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OurFuture;