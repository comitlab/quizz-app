import Quizz from '../models/quizz';
import * as  utils from '../middlewares/utils';

// import Boom from '@hapi/boom';

/**
 * Get all quizz.
 *
 * @returns {Promise}
 */
export const getAllQuizz = async () =>
  new Promise((resolve, reject) => {
    Quizz.find(
    {},
    '-updatedAt -createdAt',
    {
      sort: {
        name: 1,
      },
    },
    (err, items) => {
      if (err) {
        reject(utils.buildErrObject(422, err.message));

        return;
      }
      resolve(items);
    },
  );
});

export const findOne = async () => {
  new Promise(() => {
    Quizz.findById('5ebaec01df815b45b8ad7bdc')
  })
}


