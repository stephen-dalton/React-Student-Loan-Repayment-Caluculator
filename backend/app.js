import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema, root } from "./graphql/schema.js";
import cors from "cors";
const app = express();

/**
 * Add Express Configuration for CORS Support.
 */
app.use(cors());

app.use(
  "/___api",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => console.log("Up and Running"));
