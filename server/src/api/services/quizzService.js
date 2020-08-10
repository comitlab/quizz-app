import Quizz from '../models/quizz';
import * as  utils from '../middlewares/utils';

// import Boom from '@hapi/boom';

/**
 * Get all quizz.
 *
 * @returns {Promise}
 */

export const getAllQuizz = () =>
  new Promise((resolve, reject) => {
    Quizz.find(
    {},
    '-updatedAt -createdAt -questions',
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

/**
 * Get all one quizz.
*/

export const getOneQuizz = (id) =>
  new Promise((resolve, reject) => {
    Quizz.findOne({ _id: id},
      '-updatedAt -createdAt',
      {},
      (err, item) => {
        if(err) {
          reject(utils.buildErrObject(402, err.message));

          return;
        }
        resolve(item);
    }
  ).populate('questions')
})
