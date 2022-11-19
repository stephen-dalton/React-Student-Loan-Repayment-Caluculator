// import { countryCol } from "../database.js";
import { getUndergraduateOverSeasThresholdData } from "../functions/getUndergraduateThresholds.js";
import { getPostGradOverSeasThresholdData } from "../functions/getPostgraduateThresholds.js";
import { countryCol } from "../database.js";
async function getCountry(args) {
  try {
    const countryToFind = await countryCol.findOne({ country: args.country });
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

async function getAllCountries() {
  try {
    const allCountries = await getUndergraduateOverSeasThresholdData();
    if (!allCountries) {
      return new Error("Oops...Something Went Wrong. Please Try Again");
    }
    return allCountries;
  } catch (error) {
    console.error({ error });
    return new Error("Oops...Something Went Wrong. Please Try Again");
  }
}

async function getPGCountry(args) {
  try {
    const countryToFind = await getPostGradOverSeasThresholdData(args.country);
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

export { getCountry, getAllCountries, getPGCountry };
