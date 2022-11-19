import { buildSchema } from "graphql";
import { getCountry, getAllCountries, getPGCountry } from "./resolvers.js";

// Define Custom Types

// Define the schema
export const schema = buildSchema(`
  type Query {
    country(country: String!): CountryType
    countries: [CountryType]
    pgCountry(country: String!): PGCountryType
  }
  type CountryType {
    id: ID
    country: String
    currency: String
    exchange_rate: Float
    lower_earning_threshold: Int
    higher_earning_threshold: Int
    fixed_monthly_repayment: String
  }
  type PGCountryType {
    id: ID
    country: String
    currency: String
    exchange_rate: Float
    earning_threshold: Int
    fixed_monthly_repayment: String
  }
`);

// Create the resolver object
export const root = {
  country: getCountry,
  countries: getAllCountries,
  pgCountry: getPGCountry,
};
