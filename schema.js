import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString
} from "graphql/type";

let count = 0;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "getData",
    fields: {
      count: {
        type: GraphQLInt,
        description: 'This is the count',
        resolve: function() {
          return count;
        }
      },
      name: {
        type: GraphQLString,
        resolve: function() {
          return "hello world";
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'updateCount',
    fields: {
      count: {
        type: GraphQLInt,
        description: 'Updates the count',
        resolve: function() {
          count += 1;
          return count;
        }
      }
    }
  })
});

export default schema;

// curl -XPOST -H "Content-Type:application/graphql"  -d 'query getData { count name }' http://localhost:3000/graphql

// curl -XPOST -H 'Content-Type:application/graphql'  -d 'mutation updateCount { count }' http://localhost:3000/graphql

// curl -XPOST -H 'Content-Type:application/graphql'  -d '{__schema { queryType { name, fields { name, description, type{name, description}, isDeprecated, deprecationReason }}}}' http://localhost:3000/graphql
