import fastify from "fastify";
import { transactionsRoutes } from "./routes/transactions";

const app = fastify();

app.register(transactionsRoutes, {
  prefix: "transactions",
});

app.listen({
  port: 3000
}).then(() => console.log("Server rodando na porta http://localhost:3000"));