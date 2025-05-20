import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/", async () => {
  const tables = knex("sqlite_schema")
    .select("name")
});

app.listen({
  port: 3000
}).then(() => console.log("Server rodando na porta http://localhost:3000"));