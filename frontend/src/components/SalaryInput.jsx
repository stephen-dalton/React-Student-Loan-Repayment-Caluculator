import React, { useState } from "react";
import { useEffect } from "react";
import { useGetCountries } from "../api/queries";
export default function SalaryInput({
  setGlobalSalary,
  setglobalUGLoan,
  calculateUGRepaymentAmount,
}) {
  const [userSalary, setUserSalary] = useState(0);
  const [userUGLoan, setUGLoan] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState({});

  const { data, error, isFetching, isLoading } = useGetCountries();
  // console.log(data);

  const handleSalaryInputChange = (e) => {
    setUserSalary(e.target.value);
  };
  const handleUGLoanInputChange = (e) => {
    setUGLoan(e.target.value);
  };
  const handleSalarySubmission = (e) => {
    e.preventDefault();
    calculateUGRepaymentAmount(userSalary, userUGLoan, selectedCountry);
  };
  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value;
    const country = data.countries.find(
      ({ country }) => country === selectedCountry
    );
    setSelectedCountry(country);
  };

  if (isFetching || isLoading) {
    return (
      <section className="container mx-auto w-11/12 rounded bg-white/50 pb-5 backdrop-blur sm:w-6/12 md:w-8/12 lg:w-6/12">
        <div className="animate-pulse">
          <div className="mx-auto block w-11/12 py-5">
            <p className="mr-auto mb-2 block h-5 w-1/2 rounded bg-gray-300 text-slate-800"></p>
            <p className="mx-auto mt-1 block h-10 w-full rounded-md border-gray-300 bg-gray-300 shadow-sm" />
          </div>
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
    <section className="container mx-auto w-11/12 rounded bg-white/50 py-5 backdrop-blur sm:w-6/12 md:w-8/12 lg:w-6/12">
      <form onSubmit={handleSalarySubmission}>
        <label
          htmlFor="countries"
          className="mx-auto block w-11/12 text-base font-bold text-slate-800"
        >
          Choose your location
        </label>
        <select
          name="countries"
          id="countries"
          className="mx-auto block w-11/12 rounded-md"
          onChange={handleCountrySelect}
        >
          <option>Select Country</option>
          {data.countries.map((country) => (
            <option key={country._id} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
        <label htmlFor="salary-input" className="mx-auto block w-11/12 py-5">
          <span className="mx-auto w-11/12 text-base font-bold text-slate-800">
            Enter Your Annual Gross Salary in {selectedCountry.currency}
          </span>
          <input
            type="number"
            id="salary-input"
            required
            className=" focus:ring- focus:ring-opacity-2 mx-auto mt-1 block w-full appearance-none  rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-2"
            value={userSalary}
            onChange={handleSalaryInputChange}
          />
        </label>
        <label htmlFor="ugrad-input" className="mx-auto block w-11/12 pb-5">
          <span className="mx-auto w-11/12 text-base font-bold text-slate-800">
            Enter Your Undergraduate Loan Amount in GBP(£)
          </span>
          <input
            type="number"
            id="ugrad-input"
            className=" focus:ring- focus:ring-opacity-2 mx-auto mt-1 block w-full appearance-none  rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-2"
            required
            value={userUGLoan}
            onChange={handleUGLoanInputChange}
          />
        </label>
        <div className="mx-auto flex w-11/12 items-center pb-5">
          <input
            type="checkbox"
            id="postgraduate"
            className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="postgraduate"
            className="mx-auto ml-2 w-11/12 text-base font-bold text-slate-800"
          >
            Do you have a postgraduate loan?
          </label>
        </div>
        <button className="group mx-auto block h-fit w-11/12 rounded-md bg-slate-800 py-3 px-2 text-xs font-bold uppercase text-slate-300">
          Calculate Repayment
          <span className="group-hover:translate-x-5"> →</span>
        </button>
      </form>
    </section>
  );
}
