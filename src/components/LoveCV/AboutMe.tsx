import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Music, Book, Coffee, Lightbulb } from 'lucide-react';

const AboutMe: React.FC = () => {
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
        <h2 className="text-3xl font-bold neon-text mb-4">Qui suis-je?</h2>
        <p className="text-xl text-gray-300 font-elegant">
          Je m'ouvre à toi en toute sincérité
        </p>
      </motion.div>
      
      {/* Personal Introduction */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-blue/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Heart className="text-cyber-blue mr-2" /> 
          Mon essence
        </h3>
        <p className="mb-4 text-gray-300">
          Je m'appelle Jean-Baptiste ADJAHOUISSO, passionné de cybersécurité et de technologies innovantes. 
          Mon esprit analytique est contrebalancé par une sensibilité artistique qui me pousse 
          à voir la beauté dans les détails. Je suis quelqu'un de loyal, d'attentionné, et j'attache 
          une grande importance à l'honnêteté dans mes relations.
        </p>
        <p className="text-gray-300">
          Je crois fermement au respect mutuel et à la communication ouverte. J'aime apprendre, 
          grandir, et partager des expériences enrichissantes avec les personnes qui me sont chères.
        </p>
      </motion.div>
      
      {/* Values */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-blue/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Lightbulb className="text-cyber-blue mr-2" /> 
          Mes valeurs
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-cyber-blue mr-2">•</span>
            <span><strong>Authenticité</strong> : Je préfère toujours la vérité, même difficile, au mensonge confortable.</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyber-blue mr-2">•</span>
            <span><strong>Respect</strong> : Je considère que chaque personne mérite d'être traitée avec dignité et considération.</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyber-blue mr-2">•</span>
            <span><strong>Fidélité</strong> : Quand je m'engage, c'est avec tout mon cœur et toute ma détermination.</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyber-blue mr-2">•</span>
            <span><strong>Curiosité</strong> : J'aime apprendre et comprendre le monde qui m'entoure.</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyber-blue mr-2">•</span>
            <span><strong>Équilibre</strong> : Je recherche l'harmonie entre vie professionnelle, personnelle et sentimentale.</span>
          </li>
        </ul>
      </motion.div>
      
      {/* Passions */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10"
      >
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <Coffee className="text-cyber-blue mr-2" /> 
          Mes passions
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-cyber-gray/30 rounded-lg border border-cyber-blue/30 hover:border-cyber-blue transition-all">
            <Code className="text-cyber-blue mb-2" />
            <h4 className="font-bold mb-2">Technologies</h4>
            <p className="text-gray-300 text-sm">
              Je suis fasciné par l'univers de la cybersécurité, l'intelligence artificielle, 
              et le développement web. J'aime résoudre des problèmes complexes.
            </p>
          </div>
          
          <div className="p-5 bg-cyber-gray/30 rounded-lg border border-cyber-blue/30 hover:border-cyber-blue transition-all">
            <Music className="text-cyber-blue mb-2" />
            <h4 className="font-bold mb-2">Musique</h4>
            <p className="text-gray-300 text-sm">
              La musique me transporte et m'inspire. J'apprécie particulièrement [genres musicaux], 
              et j'aime découvrir de nouveaux artistes.
            </p>
          </div>
          
          <div className="p-5 bg-cyber-gray/30 rounded-lg border border-cyber-blue/30 hover:border-cyber-blue transition-all">
            <Book className="text-cyber-blue mb-2" />
            <h4 className="font-bold mb-2">Littérature</h4>
            <p className="text-gray-300 text-sm">
              Les livres sont mes compagnons de route. J'aime me plonger dans des histoires 
              captivantes et des ouvrages qui me font réfléchir.
            </p>
          </div>
          
          <div className="p-5 bg-cyber-gray/30 rounded-lg border border-cyber-blue/30 hover:border-cyber-blue transition-all">
            <Heart className="text-cyber-blue mb-2" />
            <h4 className="font-bold mb-2">Connexions humaines</h4>
            <p className="text-gray-300 text-sm">
              Je valorise les relations authentiques et profondes. J'aime avoir des conversations 
              sincères qui nourrissent l'âme et l'esprit.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* What makes me unique */}
      <motion.div 
        variants={itemVariants} 
        className="p-6 bg-cyber-gray/30 rounded-lg border border-cyber-blue/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-cyber-blue mr-2 text-2xl">✧</span> 
          Ce qui me rend unique
        </h3>
        <p className="mb-3 text-gray-300">
          Je suis à la fois rêveur et pragmatique, capable de voir le potentiel dans chaque situation 
          tout en restant ancré dans la réalité. Mon esprit analytique me permet de résoudre des problèmes 
          complexes, tandis que ma sensibilité me guide dans mes relations humaines.
        </p>
        <p className="mb-3 text-gray-300">
          Je suis quelqu'un qui aime surprendre et faire plaisir aux personnes qui me sont chères, 
          avec des attentions personnalisées qui montrent à quel point je les connais et les apprécie.
        </p>
        <p className="text-gray-300">
          Enfin, je suis déterminé et persévérant. Quand je tiens à quelque chose ou à quelqu'un, 
          je suis prêt à faire les efforts nécessaires pour que ça fonctionne.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;