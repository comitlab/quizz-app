import {getAllQuestions, getOneQuestion} from '../services/question';
import * as utils from '../middlewares/utils';

/**
 * Get all quizz.
 *
 * @param {Object} req
 * @param {Object} res
 * @param  {Object} next
 */
/**
* GET all questions
 */
// eslint-disable-next-line require-await
export const fetchAll = async (req, res, next) => {
  getAllQuestions()
    .then(data => res.json({data}))
    .catch(err => utils.handleError(res, err));
};

/**
* GET single-question
 */
// eslint-disable-next-line require-await
export const fetchOne = async (req, res, next) => {
  getOneQuestion(req.params.id)
    .then(data => res.json({data}))
    .catch(err => utils.handleError(res, err));
}; 