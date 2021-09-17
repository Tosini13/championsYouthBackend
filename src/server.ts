import express, { Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/root";

const app = express();

const PORT = 4000;

app.get("/", (_req: Request, res: Response) => res.send("Hello GQL!"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`GQL server is up at port ${PORT}`));
