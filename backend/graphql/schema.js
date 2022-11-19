import { buildSchema } from "graphql";
import { getCountry, getAllCountries } from "./resolvers.js";

// Define Custom Types

// Define the schema
export const schema = buildSchema(`
  type Query {
    country(country: String!): CountryType
    countries: [CountryType]
  }
  type CountryType {
    id: ID
    country: String
    currency: String
    exchange_rate: Float
    lower_earning_threshold: Int
    higher_earning_threshold: Int
    fixed_monthly_repayment: Int
  }
`);

// Create the resolver object
export const root = {
  country: getCountry,
  countries: getAllCountries,
};
