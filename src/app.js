

import { createServer } from "http"
import { createSchema, createYoga } from "graphql-yoga"

createServer(
  createYoga({
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          hello: String
        }
      `,
      resolvers: {
        Query: {
          hello: () => "Hello Hello Hello",
        },
      },
    }),
  })
).listen(4000, () => {
  console.info("GraphQL Yoga is listening on http://localhost:4000/graphql")
})
