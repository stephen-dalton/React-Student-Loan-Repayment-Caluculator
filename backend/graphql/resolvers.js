import { studentLoanDatabse } from "../database.js";

async function getUndergraduateCountry(args) {
  try {
    const countryToFind = await studentLoanDatabse
      .collection("ug_overseas_thresholds")
      .findOne({ country: args.country });
    console.log(countryToFind);
    if (!countryToFind) {
      return new Error(
        `${args.country} was not found. Please try a different country`
      );
    }
    return countryToFind;
  } catch (error) {
    console.error({ error });
    return new Error("Oop...Something went wrong please try again.");
  }
}

async function getUndergraduateCountries() {
  try {
    const allCountries = await studentLoanDatabse
      .collection("ug_overseas_thresholds")
      .find()
      .toArray();
    if (!allCountries) {
      return new Error("Oops...Something Went Wrong. Please Try Again");
    }
    return allCountries;
  } catch (error) {
    console.error({ error });
    return new Error("Oops...Something Went Wrong. Please Try Again");
  }
}

async function getPostgraduateCountry(args) {
  try {
    const countryToFind = await await studentLoanDatabse
      .collection("pg_overseas_thresholds")
      .findOne({ country: args.country });
    if (!countryToFind) {
      return new Error(
        `${args.country} was not found. Please try a different country`
      );
    }
    return countryToFind;
  } catch (error) {
    console.error({ error });
    return new Error("Oop...Something went wrong please try again.");
  }
}

export { getUndergraduateCountry, getUndergraduateCountries, getPostgraduateCountry };
