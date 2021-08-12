type Resolver = {
  Query: {
    hello: (_: undefined, { name }: { name?: string }) => string;
    person: () => Person;
  };
};

type Person = {
  name: string;
  age: number;
  gender: string;
};

const dodok8: Person = {
  name: 'dodok8',
  age: 23,
  gender: 'male',
};

const resolvers: Resolver = {
  Query: {
    hello: function (_: undefined, { name }) {
      return `Hello ${name || 'world'}`;
    },
    person: function () {
      return dodok8;
    },
  },
};

export default resolvers;
