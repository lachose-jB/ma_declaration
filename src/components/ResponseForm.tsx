import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, MapPin, MessageSquare } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com';

const ResponseForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [location, setLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérifier que tous les champs sont remplis
    if (!message.trim() || !date || !location.trim()) {
        alert('Veuillez remplir tous les champs avant de soumettre.');
        return;
    }

    // Préparer les données à envoyer
    const templateParams = {
      message,
      date: date.toLocaleDateString('fr-FR'),
      location,
    };

    // Envoyer l'email via MailJS
    emailjs
      .send(
        'service_bkbfs7c', // Remplacez par votre Service ID MailJS
        'template_4jikehj', // Remplacez par votre Template ID MailJS
        templateParams,
        'MwgGhub-9ylALpwej' // Remplacez par votre User ID MailJS
      )
      .then(
        (response) => {
          console.log('Email envoyé avec succès !', response.status, response.text);
          setIsSubmitted(true);

          // Fermer le site après l'envoi réussi
          setTimeout(() => {
            window.close();
          }, 3000); // Attendre 3 secondes avant de fermer
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de l\'email :', error);
        }
      );

    // Réinitialiser le formulaire après 5 secondes
    setTimeout(() => {
      setMessage('');
      setDate(null);
      setLocation('');
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-steel-blue mb-4">Ta Réponse</h2>
        <p className="text-xl text-gray-300 font-elegant">
          Un espace pour partager tes pensées et sentiments
        </p>
      </div>

      {isSubmitted ? (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-8 bg-cyber-gray/30 rounded-lg border border-steel-blue text-center"
        >
          <h3 className="text-2xl font-bold text-steel-blue mb-4">Message Envoyé</h3>
          <p className="text-gray-300">
            Merci pour ta réponse. Je l'attendais avec impatience et la lirai avec attention.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Ce formulaire se réinitialisera dans quelques secondes...
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 bg-cyber-gray/30 rounded-lg border border-steel-blue">
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              <MessageSquare className="w-4 h-4 mr-1 text-steel-blue" />
              Ton message
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tes pensées, sentiments, ou simplement ce que tu as sur le cœur..."
              className="cyber-input w-full resize-none"
            ></textarea>
          </div>

          <div className="mb-6">
            <p className="block text-sm font-medium text-gray-300 mb-2">
              Souhaites-tu qu'on en discute en tête-à-tête ?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-steel-blue" />
                  Date proposée
                </label>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  className="cyber-input w-full"
                  placeholderText="Choisir une date"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-steel-blue" />
                  Lieu
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Un café, un parc, un restaurant..."
                  className="cyber-input w-full"
                />
              </div>
            </div>
          </div>

          <div className="text-right">
            <button type="submit" className="cyber-button flex items-center ml-auto">
              <Send className="w-4 h-4 mr-2" />
              Envoyer
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-gray-400">
            <p>
              Tes réponses resteront privées et ne seront visibles que par moi.
            </p>
            <p className="mt-1">
              Tu peux demander la suppression de ce site et de toutes tes données à tout moment.
            </p>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ResponseForm;