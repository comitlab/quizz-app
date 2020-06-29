import '../env';
import { Seeder } from 'mongo-seeding';
import path from 'path';

const config = {
  database: process.env.MONGO_URI,
  inputPath: path.resolve(__dirname, './seeds'),
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve(__dirname, './seeds'));
const main = async () => {
  try {
    await seeder.import(collections);
    // eslint-disable-next-line no-console
    console.log('Seed complete!');
    process.exit(0);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(0);
  }
};

main();
