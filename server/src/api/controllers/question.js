import {getAllQuestions, getOneQuestion} from '../services/questionService'
import * as utils from '../middlewares/utils';

/**
 * Get all quizz.
 *
 * @param {Object} req
 * @param {Object} res
 * @param  {Object} next
 */
/**
* GET all questions by QuizzID
 */

export const fetchAll = (req, res, next) => {
  getAllQuestions()
    .then(data => res.json({data})) 
    .catch(err => utils.handleError(res, err));
};

/**
* GET single-question
 */

export const fetchOne = (req, res, next) => {
  getOneQuestion(req.params.id)
    .then(data => res.json({data}))
    .catch(err => utils.handleError(res, err));
};
