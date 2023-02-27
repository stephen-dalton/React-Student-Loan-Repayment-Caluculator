import React, { useEffect, useState } from "react";
import { calculateUndergradRepayment } from "./Calculator.helpers";
import RepaymentDisplay from "../RepaymentDisplay";
import SalaryInput from "../SalaryInput";

function Calculator() {
  /**
   * State Setters
   */
  const [repaymentAmount, setRepaymentAmount] = useState(null);

  function handleCalculateRepyament(userSalary, country) {
    const result = calculateUndergradRepayment(userSalary, country);
    setRepaymentAmount(result);
  }

  return (
    <section>
      <SalaryInput handleSubmission={handleCalculateRepyament} />
      <RepaymentDisplay UGRepaymentAmount={repaymentAmount} />
    </section>
  );
}

export default Calculator;
