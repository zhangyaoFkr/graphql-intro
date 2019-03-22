import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString
} from "graphql/type";

let count = 0;
setInterval(() => console.log(count), 2000);

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
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
    name: 'RootMutationType',
    fields: {
      updateCount: {
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
// curl -XPOST -H "Content-Type:application/graphql"  -d 'query RootQueryType { count }' http://localhost:3000/graphql
// curl -XPOST -H 'Content-Type:application/graphql'  -d '{ count }' 

// curl -XPOST -H 'Content-Type:application/graphql'  -d '{__schema { queryType { name, fields { name, description, type{name, description}, isDeprecated, deprecationReason }}}}' http://localhost:3000/graphql
