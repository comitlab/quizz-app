import faker from 'faker';
import { ObjectID } from 'mongodb';

export default [
    {
        _id: new ObjectID(),
        title: "Question n°1",
        description: "Question n°1 desciption",
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    },
    {
     _id: new ObjectID(),
      title: "Question n°1-1",
      description: "Question n°1-1 desciption",
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
    {
        _id: new ObjectID(),
        title: "Question n°2",
        description: "Question n°2 desciption",
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    },
    {
     _id: new ObjectID(),
      title: "Question n°2-2",
      description: "Question n°2-2 desciption",
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
    {
        _id: new ObjectID(),
        title: "Question n°3",
        description: "Question n°3 desciption",
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    },
    {
     _id: new ObjectID(),
      title: "Question n°3-3",
      description: "Question n°3-3 desciption",
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    },
  
];