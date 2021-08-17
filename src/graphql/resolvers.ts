import { Person, people, Movie, movies } from './db';

type Resolver = {
  Query: {
    hello: (_: unknown, { name }: { name?: string }) => string;
    person: (_: unknown, { id }: { id: number }) => Person;
    people: () => Array<Person>;
    getMovies: () => Array<Movie>;
    getById: (_: unknown, { id }: { id: number }) => Movie;
  };
  Mutation: {
    addMovie: (
      _: unknown,
      { name, score }: { name: string; score: number },
    ) => Movie;
    deleteMovie: (_: unknown, { id }: { id: number }) => boolean;
  };
};

let currentMovies: Array<Movie> = movies;

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
    getMovies: function () {
      return currentMovies;
    },
    getById: function (_, { id }) {
      return currentMovies.filter((movie) => movie.id === id)[0];
    },
  },
  Mutation: {
    addMovie: function (_, { name, score }) {
      const newMovie: Movie = {
        id: currentMovies.length + 1,
        name,
        score,
      };
      currentMovies.push(newMovie);
      return newMovie;
    },
    deleteMovie: function (_, { id }) {
      const cleanedMovies = currentMovies.filter((movie) => movie.id !== id);
      if (currentMovies.length > cleanedMovies.length) {
        currentMovies = cleanedMovies;
        return true;
      } else {
        return false;
      }
    },
  },
};

export default resolvers;
