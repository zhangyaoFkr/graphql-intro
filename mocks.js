import casual from "casual";

const mocks = {
  RootQuery: () => ({
    user: (o, { id }) => ({ id })
  }),
  List: () => ({
    name: () => casual.word,
    tasks: () => new MockList(4, (o, { completed }) => ({ completed }))
  }),
  Task: () => ({ text: casual.words(10) }),
  User: () => ({ name: casual.name })
};

export default mocks;