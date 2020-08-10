import {getAllQuizz, getOneQuizz, } from '../services/quizzService';
// import {fetchOneQuestion} from '../services/questionService';
import * as utils from '../middlewares/utils';
/**
 * Get all quizz.
 *
 * @param {Object} req
 * @param {Object} res
 * @param  {Object} next
 */
export const fetchAll = (req, res, next) => {
  getAllQuizz()
    .then(data => res.json({data}))
    .catch(err => utils.handleError(res, err));
}

/**
* GET single-quizz
 */

export const fetchOne = (req, res, next) => {
  getOneQuizz(req.params.id)
    .then(data => res.json({data}))
    .catch(err => utils.handleError(res, err));
};

