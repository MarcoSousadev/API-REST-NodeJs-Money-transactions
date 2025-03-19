import fastify from "fastify";

import { trasactionsRoutes } from "./routes/transactions";
import cookie from "@fastify/cookie"


export const app = fastify()

app.register(cookie)

app.register(trasactionsRoutes, {
  prefix: 'transactions'
})