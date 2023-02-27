import { ANNUAL_SALARY_THRESHOLD, DIFF_PERCENT } from "./Calculater.constants";

export const calculateUndergradRepayment = (userSalary, country) => {
  console.log(userSalary, country);
  const salaryConvertedToGBP = userSalary * country.exchange_rate;
  if (salaryConvertedToGBP < ANNUAL_SALARY_THRESHOLD) {
    return 0;
  }
  const salaryDiff = salaryConvertedToGBP - ANNUAL_SALARY_THRESHOLD;
  const monthlyAmount = (salaryDiff * DIFF_PERCENT) / 12;
  return Math.floor(monthlyAmount);
};
