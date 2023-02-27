import { buildSchema } from "graphql";
import {
  getUndergraduateCountry,
  getUndergraduateCountries,
  getPostgraduateCountry,
} from "./resolvers.js";

// Define Custom Types

// Define the schema
export const schema = buildSchema(`
  type Query {
    undergraduateCountry(country: String!): UndergraduateCountryType
    undergraduateCountries: [UndergraduateCountryType]
    postgraduateCountry(country: String!): PostgraduateCountryType
    postgraduateCountries: [PostgraduateCountryType]
  }
  type UndergraduateCountryType {
    _id: ID
    country: String
    currency: String
    exchange_rate: Float
    lower_earning_threshold: Int
    higher_earning_threshold: Int
    fixed_monthly_repayment: String
  }
  type PostgraduateCountryType {
    _id: ID
    country: String
    currency: String
    exchange_rate: Float
    earning_threshold: Int
    fixed_monthly_repayment: String
  }
`);

// Create the resolver object
export const root = {
  undergraduateCountry: getUndergraduateCountry,
  undergraduateCountries: getUndergraduateCountries,
  postgraduateCountry: getPostgraduateCountry,
};
