import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-800">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
