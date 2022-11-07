import { MongoClient } from "mongodb";
require("dotenv").config();

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI);

export { client };
