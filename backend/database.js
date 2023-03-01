import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI;
const client = new MongoClient('');
const studentLoanDatabse = client.db("slrc")

export { studentLoanDatabse };
