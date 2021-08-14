export type Person = {
  id: number;
  name: string;
  age: number;
  gender: string;
};

export type Movie = {
  id: number;
  name: string;
  score: number;
};

export const people: Array<Person> = [
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

export const movies: Array<Movie> = [
  {
    id: 0,
    name: 'Star Wars - The new one',
    score: 1,
  },
  {
    id: 1,
    name: 'Avengers - The new one',
    score: 8,
  },
  {
    id: 2,
    name: 'The Godfather I',
    score: 99,
  },
  {
    id: 3,
    name: 'Logan',
    score: 2,
  },
];
