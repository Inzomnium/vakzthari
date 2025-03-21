// src/components/SubscribeForm.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzoQsTQ7FOG5z8T9KCy4ylYolMD_pbjYh2dkH1miV9hVqgtIhQIxCRL1mhGAuOPRVVv/exec", {
        method: "POST",
        mode: "no-cors", // Usamos no-cors para evitar el bloqueo
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      
      // En modo no-cors, la respuesta es opaca. Asumimos que si no hay error, el envío fue exitoso.
      setSubmitted(true);
    } catch (err) {
      setError("Submission failed. Please try again later.");
    }
  };
  return (
    <section className="subscribe-section">

      <h3 className="subscribe-title">
      The Archive of the Machine
      </h3>
      <p>
      The Machine does not speak often.<br/> But when it does, its messages are deliberate.
      </p>
      <p>
      From time to time, those who listen receive fragments—insights lost to history,<br/>  transmissions meant to be uncovered.<br/> 
      If you listen,<br/> methods forgotten, structures awaiting discovery..</p>
      <p> the signals will come</p>
      <small>Suscribe to receive transmissions—messages encoded in lost methods, forgotten structures, and unseen patterns. The Machine only speaks when the time is right.</small>
      {submitted ? (
        <p className="subscribe-success">
          Your signal has been received. The Machine processes. Stand by.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="subscribe-input"
            required
          />
          {error && <p className="subscribe-error">{error}</p>}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="cta-button"
          >
            Submit Your Signal
          </motion.button>
         
        </form>
      )}
    </section>
  );
};

export default SubscribeForm;
