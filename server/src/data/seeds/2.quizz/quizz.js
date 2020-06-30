import faker from 'faker';
import { ObjectID } from 'mongodb';

export default [
  {
    name: "Quizz n°1",
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    questions: [{
      _id: new ObjectID(),
      title: "Question 1",
      description: "Question n°1 desciption",
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }]
  },
  {
    name: "Quizz n°2",
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    questions: [{
      _id: new ObjectID(),
      title: "Question 2",
      description: "Question n°2 desciption",
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }]
  },
  {
    name: "Quizz n°3",
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    questions: [{
      _id: new ObjectID(),
      title: "Question 3",
      description: "Question n°3 desciption",
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    }]
  }
];