import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';


function App() {

  return (
    <div className="bg-slate-800 h-screen w-screen">
      <Header />
      <Calculator />
    </div>
  )
}

export default App
