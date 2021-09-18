import express, { Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/root";
import cors from "cors";

const app = express();

const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:19006",
    credentials: true,
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (_req: Request, res: Response) => res.send("Hello GQL!"));

app.listen(PORT, () => console.log(`GQL server is up at port ${PORT}`));
