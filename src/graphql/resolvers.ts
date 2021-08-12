type Resolver = {
  Query: {
    hello: (_: unknown, { name }: { name?: string }) => string;
    person: (_: unknown, { id }: { id: number }) => Person;
    people: () => Array<Person>;
  };
};

type Person = {
  id: number;
  name: string;
  age: number;
  gender: string;
};

const people: Array<Person> = [
  {
    id: 0,
    name: 'dodok8',
    age: 23,
    gender: 'male',
  },
  {
    id: 1,
    name: 'Jisu',
    age: 18,
    gender: 'female',
  },
  {
    id: 2,
    name: 'Japan Guy',
    age: 18,
    gender: 'male',
  },
  {
    id: 3,
    name: 'Daal',
    age: 18,
    gender: 'male',
  },
  {
    id: 4,
    name: 'JD',
    age: 18,
    gender: 'male',
  },
  {
    id: 5,
    name: 'moondaddi',
    age: 18,
    gender: 'male',
  },
  {
    id: 6,
    name: 'flynn',
    age: 18,
    gender: 'male',
  },
];

const resolvers: Resolver = {
  Query: {
    hello: function (_, { name }) {
      return `Hello ${name || 'world'}`;
    },
    person: function (_, { id }) {
      return people.filter((person) => person.id === id)[0];
    },
    people: function () {
      return people;
    },
  },
};

export default resolvers;
