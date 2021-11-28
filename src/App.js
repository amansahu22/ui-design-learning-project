import React from 'react';
import './App.css';

import { Blog, Header, Footer, Possibility, Features, WhatGPT3 } from './container';

import { Navbar, Brand, CTA } from './components';

//ctrl click to go to component

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
