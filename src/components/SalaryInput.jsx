import React, { useState } from "react";

export default function SalaryInput({
  setGlobalSalary,
  setglobalUGLoan,
  calculateUGRepaymentAmount,
}) {
  const [userSalary, setUserSalary] = useState(0);
  const [userUGLoan, setUGLoan] = useState(0);

  const handleSalaryInputChange = (e) => {
    setUserSalary(e.target.value);
  };
  const handleUGLoanInputChange = (e) => {
    setUGLoan(e.target.value);
  };
  const handleSalarySubmission = (e) => {
    e.preventDefault();
    calculateUGRepaymentAmount(userSalary, userUGLoan);
  };

  return (
    <section className="container mx-auto w-11/12 rounded bg-white/50 pb-5 backdrop-blur">
      <form onSubmit={handleSalarySubmission}>
        <label htmlFor="salary-input" className="mx-auto block w-11/12 py-5">
          <span className="mx-auto w-11/12 text-base font-bold text-slate-800">
            Enter Your Annual Gross Salary
          </span>
          <input
            type="number"
            id="salary-input"
            className=" focus:ring- focus:ring-opacity-2 mx-auto mt-1 block w-full appearance-none  rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-2"
            placeholder="40000"
            value={userSalary}
            onChange={handleSalaryInputChange}
          />
        </label>
        <label htmlFor="ugrad-input" className="mx-auto block w-11/12 pb-5">
          <span className="mx-auto w-11/12 text-base font-bold text-slate-800">
            Enter Your Undergraduate Loan Amount
          </span>
          <input
            type="number"
            id="ugrad-input"
            className=" focus:ring- focus:ring-opacity-2 mx-auto mt-1 block w-full appearance-none  rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-2"
            placeholder="40000"
            value={userUGLoan}
            onChange={handleUGLoanInputChange}
          />
        </label>
        <button className="group mx-auto block h-fit w-11/12 rounded-md bg-slate-800 py-3 px-2 text-xs font-bold uppercase text-slate-300">
          Calculate Repayment
          <span className="group-hover:translate-x-5"> →</span>
        </button>
      </form>
    </section>
  );
}
