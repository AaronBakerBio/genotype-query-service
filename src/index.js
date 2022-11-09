import mount from "koa-mount";
import Koa from "koa-graphql";

const app = new Koa();

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: MyGraphQLSchema,
      graphiql: true,
    })
  )
);

app.listen(4000);
