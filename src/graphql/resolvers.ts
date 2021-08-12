type HelloQuery = (_: undefined, { name }: { name?: string }) => string;

const resolvers = {
  Query: {
    hello: function (_: undefined, { name }) {
      return `Hello ${name || 'world'}`;
    } as HelloQuery,
  },
};

export default resolvers;
