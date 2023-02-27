import React, { useState, useMemo } from "react";
import { useGetUndergraduteCountries } from "../api/queries";
export default function SalaryInput({ handleSubmission }) {
  /**
   * State Setters
   */
  const [userCountry, setUserCountry] = useState({});
  const [userSalary, setUserSalary] = useState(0);
  /**
   * React Query
   */
  const { data, error, isFetching, isLoading } = useGetUndergraduteCountries();
  /**
   * Derived State
   */
  const isDataLoading = useMemo(
    () => !data && !error && isLoading && isFetching,
    [data, error, isFetching, isLoading]
  );
  /**
   * Event Handlers
   */

  function handleFormSubmission(e) {
    e.preventDefault();
    handleSubmission(userSalary, userCountry);
    setUserCountry({ country: "" });
    setUserSalary(0);
  }
  /**
   * Component States
   */
  if (isDataLoading) {
    return (
      <section className="container mx-auto w-11/12 rounded bg-white/50 pb-5 backdrop-blur sm:w-6/12 md:w-8/12 lg:w-6/12">
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
    <section className="container mx-auto w-11/12 rounded bg-white/50 py-5 backdrop-blur sm:w-6/12 md:w-8/12 lg:w-6/12">
      <form onSubmit={handleFormSubmission}>
        <label
          htmlFor="ug-countries"
          className="mx-auto block w-11/12 text-base font-bold text-slate-800"
        >
          Choose your location
        </label>
        <select
          name="ug-countries"
          id="ug-countries"
          className="mx-auto block w-11/12 rounded-md"
          value={userCountry?.country}
          required
          onChange={(event) => {
            setUserCountry(
              ...data.undergraduateCountries.filter(
                (country) => country.country === event.target.value
              )
            );
          }}
        >
          <option value="">— Select Country —</option>
          <optgroup label="Countries">
            {data?.undergraduateCountries?.map((country) => (
              <option key={country._id} value={country.country}>
                {country.country}
              </option>
            ))}
          </optgroup>
        </select>
        <label htmlFor="salary-input" className="mx-auto block w-11/12 py-5">
          <span className="mx-auto w-11/12 text-base font-bold text-slate-800">
            Enter Your Annual Gross Salary in {userCountry.currency}
          </span>
          <input
            type="number"
            id="salary-input"
            required
            className=" focus:ring- focus:ring-opacity-2 mx-auto mt-1 block w-full appearance-none  rounded-md border-gray-300 shadow-sm focus:border-slate-800 focus:ring-2"
            value={userSalary}
            onChange={(event) => {
              setUserSalary(event.target.valueAsNumber);
            }}
          />
        </label>
        <div className="mx-auto flex w-11/12 items-center pb-5">
          <input
            type="checkbox"
            id="postgraduate"
            // checked={hasPostgradLoan}
            // onChange={handlePostgradChange}
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

//TODO conitionally render loading block, then render post graduate loan repyament!!
