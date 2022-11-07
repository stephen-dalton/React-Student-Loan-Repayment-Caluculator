import React from "react";

function Header() {
  return (
    <header className="mb-7 h-fit w-screen rounded-b-xl bg-slate-700 p-1 text-center font-sans shadow-md shadow-slate-900">
      <div>
        <h1 className="text-5xl font-bold uppercase text-slate-100">
          HOW MUCH?
        </h1>
        <span className="text-[13px] font-bold text-slate-400">
          A STUDENT LOAN REPAYMENT CALCULATOR
        </span>
      </div>
    </header>
  );
}

export default Header;
