import React from "react";

function RepaymentDisplay({ UGRepaymentAmount, canNotRepay }) {
  if (canNotRepay)
    return (
      <section className="container mx-auto mt-5 w-11/12 rounded bg-white/50 py-3 pb-5 backdrop-blur">
        <div className="text-center">
          <p className=" text-slate-300">
            You do not need to make loan repayments yet.
            <br />
            This is likely due to your salary being below the re-payment
            threshold.
          </p>
        </div>
      </section>
    );

  return (
    <section className="container mx-auto mt-5 w-11/12 rounded bg-white/50 py-3 pb-5 backdrop-blur">
      <div className="text-center">
        <p className="font-sans text-8xl font-bold text-slate-300">
          £{UGRepaymentAmount}
        </p>
        <p className="uppercase text-slate-300">
          undergraduate monthly repayment
        </p>
      </div>
    </section>
  );
}

export default RepaymentDisplay;