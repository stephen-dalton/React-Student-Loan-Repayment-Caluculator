import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);
const countryCol = client.db("slrc").collection("ug-overseas-thresholds");

export { countryCol };
