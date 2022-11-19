import React, { useEffect, useState } from "react";
import { useGetPGCountry } from "../api/queries";
import RepaymentDisplay from "./RepaymentDisplay";
import SalaryInput from "./SalaryInput";

const ANNUAL_SALARY_THRESHOLD = 27295;
const DIFF_PERCENT = 0.09;

function Calculator() {
  const [canNotRepay, setCanNotRepay] = useState(false);
  const [repaymentAmount, setRepaymentAmount] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [hasPostgradLoan, setHasPostgradLoan] = useState(false);
  
  const { data, error, isFetching, isLoading } = useGetPGCountry(
    selectedCountry.country,
    hasPostgradLoan
  );
  console.log(data);

  const calculateUGRepaymentAmount = (userSalary, country, hasPostgradLoan) => {
    setCanNotRepay(false);
    const salaryConvertedToGBP = userSalary * country.exchange_rate;
    if (salaryConvertedToGBP < ANNUAL_SALARY_THRESHOLD) {
      console.log(userSalary);
      setCanNotRepay(true);
      return null;
    }
    if (hasPostgradLoan) {
      console.log(data);
    }
    const salaryDiff = salaryConvertedToGBP - ANNUAL_SALARY_THRESHOLD;
    const monthlyAmount = (salaryDiff * DIFF_PERCENT) / 12;
    setRepaymentAmount(monthlyAmount.toFixed(2));
  };

  return (
    <section>
      <SalaryInput
        selectedCountry={selectedCountry}
        calculateUGRepaymentAmount={calculateUGRepaymentAmount}
        setSelectedCountry={setSelectedCountry}
        hasPostgradLoan={hasPostgradLoan}
        setHasPostgradLoan={setHasPostgradLoan}
      />
      <RepaymentDisplay
        canNotRepay={canNotRepay}
        UGRepaymentAmount={repaymentAmount}
      />
    </section>
  );
}

export default Calculator;
