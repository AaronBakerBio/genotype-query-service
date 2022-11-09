import Koa from "koa";

const app = new Koa();
const PORT = 3000;

app.use(async (ctx) => {
  ctx.body = {
    status: "success",
    message: "hello, world!",
  };
});

export const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// new code thing
