import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import mocks from "./mocks.js";

const schemaString = `
type User {
  id: ID!
  name: String
  lists: [List]
}
type List {
  id: ID!
  name: String
  owner: User
  incomplete_count: Int
  tasks(completed: Boolean): [Task]
}
type Task {
  id: ID!
  text: String
  completed: Boolean
  list: List
}
type RootQuery {
  user(id: ID): User
}
schema {
  query: RootQuery
}
`;

// function getName() {
//   return "Hello world";
// }
// let count = 0;
// function getCount() {
//   return count;
// }

// const resolvers = {
//   Query: {
//     name: () => getName(),
//     count: () => getCount()
//   },
//   Mutation: {
//     updateCount: (root, { num }) => {
//       if (typeof num === "number") {
//         count = num;
//         return count;
//       }
//       return (count += 1);
//     }
//   }
// };

const schema = makeExecutableSchema({
  typeDefs: [schemaString]
});

addMockFunctionsToSchema({ schema, mocks });

export default schema;
