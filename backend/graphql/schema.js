import { buildSchema } from "graphql";
import { thresholdCol } from "../database.js";

// Define Custom Types

// Define the schema
export const schema = buildSchema(`
  type Query {
    country(country: String!): CountryType
    countries: [CountryType]
  }
  type CountryType {
    _id: ID
    country: String
    currency: String
    exchange_rate: Float
    lower_earning_threshold: Int
    higher_earning_threshold: Int
    fixed_monthly_repayment: Int
  }
`);

// Create the resolver function
async function getCountry(args) {
  try {
    const countryToFind = await thresholdCol.findOne({ country: args.country });
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
    const allCountries = await thresholdCol.find({}).toArray();
    if (!allCountries) {
      return new Error("Oops...Something Went Wrong. Please Try Again");
    }
    return allCountries;
  } catch (error) {
    console.error({ error });
    return new Error("Oops...Something Went Wrong. Please Try Again");
  }
}

// Create the resolver object
export const root = {
  country: getCountry,
  countries: getAllCountries,
};
