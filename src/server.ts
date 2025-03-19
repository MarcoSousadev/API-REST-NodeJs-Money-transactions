import fastify from "fastify";
import { env } from "./env";
import { trasactionsRoutes } from "./env/routes/transactions";
import cookie from "@fastify/cookie"


const app = fastify()

app.register(cookie)

app.register(trasactionsRoutes, {
  prefix: 'transactions'
})

app.listen({
  port:env.PORT,
}).then(()  => {
  console.log('Http server Running')
})