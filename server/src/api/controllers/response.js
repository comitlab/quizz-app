import {getAllResponses, getOneResponse} from '../services/ResponseService'
import * as utils from '../middlewares/utils';

/**
 * Get all quizz.
 *
 * @param {Object} req
 * @param {Object} res
 * @param  {Object} next
 */
/**
* GET all Responses by QuestionID
 */

export const fetchAll = (req, res, next) => {
  getAllResponses()
    .then(data => res.json({data})) 
    .catch(err => utils.handleError(res, err));
};

/**
* GET single-response
 */

export const fetchOne = (req, res, next) => {
  getOneResponse(req.params.id)
    .then(data => res.json({data}))
    .catch(err => utils.handleError(res, err));
};
