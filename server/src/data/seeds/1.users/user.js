import faker from 'faker';
import { ObjectID } from 'mongodb';

export default [
  {
    _id: new ObjectID(),
    name: 'Super Administrator',
    lastName: faker.name.lastName(),
    email: 'admin@admin.com',
    password: 'password',
    role: 'admin',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148f',
    city: faker.address.city(),
    country: faker.address.country(),
    phone: faker.phone.phoneNumber(),
  },
  {
    _id: new ObjectID(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'password',
    role: 'user',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148f',
    birthDate: faker.date.past(),
    city: faker.address.city(),
    country: faker.address.country(),
    phone: faker.phone.phoneNumber(),
    cni: "1256874586214",
    homeInstitution: 'South Side High School',
    pathway: 'S1',
    average: 13
  },
  {
    _id: new ObjectID(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'password',
    role: 'user',
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148f',
    birthDate: faker.date.past(),
    city: faker.address.city(),
    country: faker.address.country(),
    phone: faker.phone.phoneNumber(),
    cni: "5429874586214",
    homeInstitution: 'Noth Side High School',
    pathway: 'S1',
    average: 13
  }
];
