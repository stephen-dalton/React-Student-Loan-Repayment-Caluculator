import React, { useState } from "react";
import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import { GET_COUNTRIES } from "../api/queries";
export default function SalaryInput({
  setGlobalSalary,
  setglobalUGLoan,
  calculateUGRepaymentAmount,
}) {
  const [userSalary, setUserSalary] = useState(0);
  const [userUGLoan, setUGLoan] = useState(0);

  const queryClient = new QueryClient();

  const { isLoading, isFetching, error, data } = useQuery(["countries"], () =>
    axios(GET_COUNTRIES).then((res) => res.data)
  );

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

  if (isFetching || isLoading) {
    return (
      <section className="container mx-auto w-11/12 rounded bg-white/50 pb-5 backdrop-blur">
        <div className="animate-pulse">
          <div className="mx-auto block w-11/12 py-5">
            <p className="mr-auto mb-2 block h-5 w-1/2 rounded bg-gray-300 text-slate-800"></p>
            <p className="mx-auto mt-1 block h-10 w-full rounded-md border-gray-300 bg-gray-300 shadow-sm" />
          </div>
          <div className="mx-auto block w-11/12 pb-5">
            <p className="mr-auto mb-2 block h-5 w-1/2 rounded bg-gray-300 text-slate-800"></p>
            <p className="mx-auto mt-1 block h-10 w-full rounded-md border-gray-300 bg-gray-300 shadow-sm" />
          </div>
          <div className="mx-auto block h-10 w-11/12 rounded-md bg-slate-800 py-3 px-2"></div>
        </div>
      </section>
    );
  }

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
