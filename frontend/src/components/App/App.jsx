import React, { useState } from "react";
import Calculator from "../Calculator";
import Header from "../Header";
import Footer from "../Footer";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col bg-slate-800">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
