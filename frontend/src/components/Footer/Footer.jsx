import React from "react";

import { UKFlag } from "./Footer.constants";

function Footer() {
  return (
    <footer className="mt-auto h-fit w-screen rounded-t-xl bg-slate-700 py-1 text-center font-sans shadow-md shadow-slate-900">
      <div className="flex flex-col flex-wrap items-center justify-center py-1 text-center">
        <UKFlag />
        <span className="py-1 text-[13px] font-bold uppercase text-slate-400">
          FOR STUDENTS WHO STUDIED IN THE UK AND WANT TO KNOW HOW MUCH THEY NEED
          TO REPAY IF WORKING OVERSEAS.
        </span>
        <span className="pb-1 text-[13px] font-bold text-slate-400">
          THIS SITE IS FOR MY OWN SELF LEARNING. FOR UP TO DATE STUDENT FINANCE
          REPAYMENT INFORMATION PLEASE SEE THE GOV.UK WEBSITE
        </span>
      </div>
    </footer>
  );
}

export default Footer;
