import faker from 'faker';

import question from "../3.question/question";

export default [
  {
    name: faker.name.title(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    questions: [question[0]._id, question[3]._id]
  },
  {
    name: faker.name.title(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    questions: [question[2]._id]
  },
  {
    name: faker.name.title(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    questions: [question[1]._id]
  }
];
