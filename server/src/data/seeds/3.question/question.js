import faker from 'faker';
import {ObjectID} from 'mongodb';

export default [
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.name.title(),
    note: 5,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.name.title(),
    note: 5,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.name.title(),
    note: 5,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.name.title(),
    note: 5,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.name.title(),
    note: 5,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.name.title(),
    note: 5,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },

];
