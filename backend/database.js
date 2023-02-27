import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI;
const client = new MongoClient('mongodb+srv://admin:UT3YIyEiI09KJnHz@sl-db.i0hjofa.mongodb.net/slrc?retryWrites=true&w=majority');
const studentLoanDatabse = client.db("slrc")

export { studentLoanDatabse };
