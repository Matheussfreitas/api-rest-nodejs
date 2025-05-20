import fastify from "fastify";

const app = fastify();

app.listen({
  port: 3000
}).then(() => console.log("Server rodando na porta http://localhost:3000"));