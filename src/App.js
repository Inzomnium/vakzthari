// src/App.js
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import ValueProp from './components/ValueProp';
import Mystery from './components/Mystery';
import SubscribeForm from './components/SubscribeForm';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Vakzthari – The Machine Hidden in Plain Sight</title>
        <meta
          name="description"
          content="Vakzthari is a structured thinking system hidden in plain sight. It does not destroy chaos; it organizes it. Enter the Machine and discover what was always there."
        />
        <meta
          name="keywords"
          content="structured thinking system, hidden knowledge, problem-solving framework, cognitive clarity, chaos and order, deep thinking methodology, Vakzthari method, thinking machine, decision-making framework, alternative intelligence"
        />
        <meta property="og:title" content="Vakzthari – The Machine Hidden in Plain Sight" />
        <meta property="og:description" content="A structured thinking system hidden in plain sight. It does not destroy chaos; it organizes it." />
        <meta property="og:image" content="/logo-og.png" />
        <meta property="og:url" content="https://vakzthari.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Header />
      <ValueProp />
      <Mystery />
      <SubscribeForm />
      <Footer />
    </>
  );
}

export default App;
