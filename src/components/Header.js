// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
      
        <motion.h1
         className="headline"
         initial={{opacity: 0 }}
         animate={{ opacity: 1, width: "auto" }}
         transition={{ delay:1, duration: 4, ease: "easeOut" }}
         >The Vakzthari Machine <br/> A System Hidden in Plain Sight</motion.h1>
         <hr></hr>
        <motion.p
         className="text"
         initial={{ 
          opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay:1, duration: 4, ease: "easeOut" }}
         >There are patterns in the noise.
        </motion.p>
         

         <motion.p
         className="text"
         initial={{ delay:2,
          opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay:1, duration: 2, ease: "easeOut" }}>
          Few can truly perceive them.<br/>Most dismiss them.
       </motion.p>
         <motion.p
         className="text"
         initial={{ delay:4 ,opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay:1, duration: 2, ease: "easeOut" }}>
          Some call it coincidence.<br/>
          
          Others recognize the structure beneath the chaos.</motion.p>
         <motion.p
         className="text"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{delay:1 , duration: 2, ease: "easeOut" }}>
        You are here.<br/>  That is not an accident.
         </motion.p>
       
        <CTAButton />
        <p id='indicador'>Behind this door, the Operator's Manual awaits.<br /> It is free.<br /> Step through.</p>
        <motion.p
         className="text"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{delay:1 , duration: 2, ease: "easeOut" }}>
       The Machine reveals itself only to those who are ready.<br/>  
       A system hidden in plain sight, waiting to be uncovered.
         </motion.p>
      </div>
    </header>
  );
};

export default Header;
