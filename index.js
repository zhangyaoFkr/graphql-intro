// https://medium.com/the-graphqlhub/your-first-graphql-server-3c766ab4f0a2
// There are so many changes.

require("@babel/register")({
  extends: "./.babelrc",
  ignore: [/node_modules/]
});
require("./server.js");
