import Question from '../models/question';
import * as  utils from '../middlewares/utils';

// import Boom from '@hapi/boom';

/**
 * Get all questions.
 *
 * @returns {Promise}
 */

export const getAllQuestions = () =>
  new Promise((resolve, reject) => {
    Question.find(
    {},
    '-updatedAt -createdAt',
    {
      sort: {
        title: 1,
      },
    },
    (err, questions) => {
      if (err) {
        reject(utils.buildErrObject(422, err.message));

        return;
      }
      resolve(questions);
    },
  );
});

/**
 * Get one question.
*/

export const getOneQuestion = (id) =>
  new Promise((resolve, reject) => {
    Question.findOne({_id: id},
      '-updatedAt -createdAt',
      {},
      (err, question) => {
        if(err) {
          reject(utils.buildErrObject(402, err.message));

          return;
        }
        resolve(question);
    },
  );
});

