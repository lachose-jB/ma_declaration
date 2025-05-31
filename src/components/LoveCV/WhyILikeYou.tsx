import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Brain, Smile, Sun, Star } from 'lucide-react';

const WhyILikeYou: React.FC = () => {
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
        <h2 className="text-3xl font-bold neon-text-purple mb-4">Toi et Moi</h2>
        <p className="text-xl text-gray-300 font-elegant">
          Ce qui m'attire chez toi et ce que je ressens
        </p>
      </motion.div>
      
      {/* Physical Attraction */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-purple/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Sparkles className="text-cyber-purple mr-2" /> 
          Ce qui m'attire chez toi
        </h3>
        <p className="mb-4 text-gray-300">
          Dès que je t'ai vue, j'ai été captivé par ton sourire rayonnant qui illumine chaque pièce
          où tu entres. Tes yeux expressifs semblent refléter la profondeur de ton âme, et j'aime 
          m'y perdre quand nous parlons.
        </p>
        <p className="mb-4 text-gray-300">
          Ta présence est à la fois apaisante et stimulante. J'admire ta façon de te tenir, 
          ta démarche assurée, et cette élégance naturelle qui te caractérise, sans même que 
          tu aies besoin d'y penser.
        </p>
        <p className="text-gray-300">
          Mais au-delà de ta beauté physique, c'est l'harmonie entre ton apparence et ta personnalité 
          qui me touche profondément. Tu es belle à l'intérieur comme à l'extérieur, et c'est cette 
          cohérence qui me fascine.
        </p>
      </motion.div>
      
      {/* Mental Connection */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-purple/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Brain className="text-cyber-purple mr-2" /> 
          Notre connexion intellectuelle
        </h3>
        <p className="mb-4 text-gray-300">
          Ton intelligence vive et ta curiosité insatiable me stimulent intellectuellement. 
          J'adore nos conversations qui peuvent passer du léger au profond en un instant, 
          sans jamais perdre en intensité ni en intérêt.
        </p>
        <p className="mb-4 text-gray-300">
          Ta façon de voir le monde, ton analyse pertinente des situations, et ta capacité 
          à remettre en question les idées reçues m'impressionnent. Tu m'inspires à élargir 
          mes horizons et à réfléchir différemment.
        </p>
        <p className="text-gray-300">
          Nous partageons cette passion pour [intérêts communs], et chaque discussion sur ce sujet 
          me confirme à quel point nos esprits sont en harmonie, même quand nos opinions divergent.
        </p>
      </motion.div>
      
      {/* Spiritual Connection */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-purple/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Sun className="text-cyber-purple mr-2" /> 
          Notre connexion spirituelle
        </h3>
        <p className="mb-4 text-gray-300">
          Au-delà des mots et des pensées, je ressens une connexion plus profonde avec toi. 
          Nos valeurs fondamentales s'alignent d'une façon qui me semble rare et précieuse. 
          Ta conception de la vie, ton respect pour les autres, et ton éthique personnelle 
          résonnent profondément en moi.
        </p>
        <p className="mb-4 text-gray-300">
          J'admire ta compassion et ton empathie. La façon dont tu prends soin des autres, 
          dont tu écoutes véritablement quand on te parle, et dont tu cherches toujours à 
          comprendre plutôt qu'à juger, témoigne d'une âme lumineuse.
        </p>
        <p className="text-gray-300">
          Cette dimension spirituelle de notre connexion me donne l'impression que nous nous 
          connaissions déjà, comme si nos âmes s'étaient reconnues.
        </p>
      </motion.div>
      
      {/* My Feelings */}
      <motion.div 
        variants={itemVariants} 
        className="mb-10 p-6 bg-cyber-gray/30 rounded-lg border border-cyber-purple/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Heart className="text-cyber-purple mr-2" /> 
          Ce que je ressens pour toi
        </h3>
        <p className="mb-4 text-gray-300">
          Au fil du temps, mes sentiments pour toi se sont approfondis et clarifiés. Ce que 
          j'éprouve dépasse l'attirance ou l'affection simple. C'est un mélange d'admiration, 
          de tendresse, de désir de protection, et d'envie de partager ma vie avec toi.
        </p>
        <p className="mb-4 text-gray-300">
          Quand je pense à toi, je ressens une chaleur qui m'envahit et un sourire qui se 
          dessine spontanément sur mon visage. Tu occupes mes pensées quotidiennes, et j'anticipe 
          avec impatience chaque moment passé ensemble.
        </p>
        <p className="text-gray-300">
          Je crois que c'est de l'amour - un amour qui a grandi naturellement, nourri par nos 
          échanges, nos rires partagés, et cette complicité qui s'est installée entre nous. 
          Un amour que j'ai choisi de te révéler aujourd'hui, avec respect et sincérité.
        </p>
      </motion.div>
      
      {/* What I Dream to Build */}
      <motion.div 
        variants={itemVariants} 
        className="p-6 bg-cyber-gray/30 rounded-lg border border-cyber-purple/30"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Star className="text-cyber-purple mr-2" /> 
          Ce que je rêve de construire avec toi
        </h3>
        <p className="mb-4 text-gray-300">
          J'imagine une relation où nous grandirions ensemble, tout en respectant nos individualités. 
          Une relation basée sur la confiance, la communication ouverte, et le soutien mutuel dans 
          nos projets respectifs.
        </p>
        <p className="mb-4 text-gray-300">
          Je nous vois partager des moments simples du quotidien, comme des discussions autour d'un café, 
          des promenades main dans la main, ou des soirées tranquilles à échanger sur nos journées.
        </p>
        <p className="mb-4 text-gray-300">
          Je rêve aussi d'aventures partagées, de voyages qui nous feraient découvrir le monde ensemble, 
          d'expériences nouvelles qui renforceraient notre lien et enrichiraient nos vies.
        </p>
        <p className="text-gray-300">
          Surtout, je veux être ce partenaire qui t'encourage, te soutient, te fait rire, et 
          t'apporte autant de bonheur que tu m'en apportes.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhyILikeYou;