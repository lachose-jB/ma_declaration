import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Flower, Router as Butterfly } from 'lucide-react';

interface FloatingElementsProps {
  type?: 'hearts' | 'flowers' | 'butterflies' | 'mixed';
  count?: number;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  type = 'mixed', 
  count = 15 
}) => {
  const generateElements = () => {
    const elements = [];
    for (let i = 0; i < count; i++) {
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 20 + 15;
      
      // Random animation delay
      const delay = Math.random() * 5;
      
      // Random animation duration
      const duration = Math.random() * 10 + 10;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.3;
      
      // Random element type
      let ElementComponent;
      const colors = ['text-cyber-blue', 'text-cyber-purple', 'text-cyber-pink', 'text-steel-blue'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      if (type === 'hearts') {
        ElementComponent = Heart;
      } else if (type === 'flowers') {
        ElementComponent = Flower;
      } else if (type === 'butterflies') {
        ElementComponent = Butterfly;
      } else {
        // Mixed: randomly choose an element
        const elements = [Heart, Flower, Butterfly];
        ElementComponent = elements[Math.floor(Math.random() * elements.length)];
      }
      
      elements.push(
        <motion.div
          key={i}
          className={`absolute ${randomColor}`}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            opacity: opacity,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <ElementComponent size={size} />
        </motion.div>
      );
    }
    return elements;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {generateElements()}
    </div>
  );
};

export default FloatingElements;