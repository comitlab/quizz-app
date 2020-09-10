import faker from 'faker';
import {ObjectID} from 'mongodb';

import response from '../4.response/response';

export default [
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    note: 3,
    nameAttribute: 1,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    responses: [response[0]._id, response[0]._id]
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    note: 2,
    nameAttribute: 2,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    responses: [response[0]._id, response[0]._id]
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    note: 5,
    nameAttribute: 3,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    responses: [response[0]._id, response[0]._id]
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    note: 3,
    nameAttribute: 4,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    responses: [response[0]._id, response[0]._id]
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    note: 1,
    nameAttribute: 5,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    responses: [response[0]._id, response[0]._id]
  },
  {
    _id: new ObjectID(),
    title: faker.name.title(),
    description: faker.lorem.paragraph(),
    note: 2,
    nameAttribute: 6,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    responses: [response[0]._id, response[0]._id]
  },

];
