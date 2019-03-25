import express from 'express';
import schema from './schema';
import graphqlHTTP from 'express-graphql';

let app  = express();
let PORT = 3000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/graphql`));
