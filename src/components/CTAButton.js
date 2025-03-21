import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CTAButton = () => {
  const phrases = [
    "Enter the Machine.",
    "Discover the System.",
    "The Machine does not move. It reveals."
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [buttonWidth, setButtonWidth] = useState("auto");

  // Función para obtener un intervalo aleatorio entre 5 y 8 segundos
  const getRandomInterval = () => Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Fase 1: Fade out
      controls.start({ opacity: 0, transition: { duration: 0.5 } })
        .then(() => {
          // Calcula el ancho del nuevo texto antes de aplicarlo
          const newText = phrases[(currentIndex + 1) % phrases.length];
          const tempSpan = document.createElement("span");
          tempSpan.style.visibility = "hidden";
          tempSpan.style.position = "absolute";
          tempSpan.style.whiteSpace = "nowrap";
          tempSpan.innerText = newText;
          document.body.appendChild(tempSpan);
          setButtonWidth(tempSpan.offsetWidth + 40 + "px"); // Ajustar margen
          document.body.removeChild(tempSpan);

          // Cambia el texto
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);

          // Fase 2: Fade in
          controls.start({ opacity: 1, transition: { duration: 0.5 } });
        });
    }, getRandomInterval());

    return () => clearTimeout(timeout);
  }, [currentIndex, controls]);

  return (
    <motion.button
      initial={{ opacity: 0, width: "auto" }}
      animate={{ opacity: 1, width: buttonWidth }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cta-button"
      onClick={() => window.location.href = "https://thevakztharimachine.substack.com/"}
      style={{
        padding: "10px 20px",     
        cursor: "pointer",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "inline-block",
        textAlign: "center"
      }}
    >
      <motion.span animate={controls} className="cta-text">
        {phrases[currentIndex]}
      </motion.span>
    </motion.button>
  );
};

export default CTAButton;
