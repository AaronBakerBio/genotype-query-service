import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.get("/", (req, res) => res.send("Hello World!"));

app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000`)
);
