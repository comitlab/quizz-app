import {getAllQuizz} from '../services/quizzService';
import * as utils from '../middlewares/utils';
import Quizz from '../models/quizz';

/**
 * Get all quizz.
 *
 * @param {Object} req
 * @param {Object} res
 * @param  {Object} next
 */
export const fetchAll = async (req, res, next) => {
  getAllQuizz()
    .then(data => res.json({data}))
    .catch(err => utils.handleError(res, err));
};

/**
* GET single-quizz
 */

export const fetchOne = async (req, res, next) => {
  Quizz.findOne({ _id: req.params.id })
    .then(quizz => res.status(200).json(quizz))
    .catch(err => res.status(404).json({ err }));
}; 

