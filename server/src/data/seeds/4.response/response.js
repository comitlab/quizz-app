import faker from 'faker';
import {ObjectID} from 'mongodb';

export default [
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    etat: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    etat: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    etat: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    etat: false,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    etat: false,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    etat: false,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },

];
