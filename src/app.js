

import { createServer } from "http"
import { createSchema, createYoga } from "graphql-yoga"

createServer(
  createYoga({
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Event{
            id: ID,
            title: String,
            date: Int
        }

        type Query {
          event: Event 
        }

      `,
      resolvers: {
        Query: {
          event: () => {
            return {
              id: 0, title: "lala", date: 1000,
            };
          },
        },
      },
    }),
  })
).listen(4000, () => {
  console.info("GraphQL Yoga is listening on http://localhost:4000/graphql")
})
