import { makeExecutableSchema } from 'graphql-tools';

const schemaString = `
type Query {
  name: String
  count: Int
}

type Mutation {
  updateCount(num: Int): Int
}
`;

function getName() {
  return 'Hello world';
}
let count = 0;
function getCount() {
  return count;
}

const resolvers =  {
  Query: {
    name: () => getName(),
    count: () => getCount()
  },
  Mutation: {
    updateCount: (root, { num }) => {
      if (typeof num === "number") {
        count = num;
        return count;
      }
      return count += 1;
    }
  }
};

export default makeExecutableSchema({
  typeDefs: [schemaString],
  resolvers
});
