import {getAllUser, getOneUser} from '../services/userService';
import * as utils from '../middlewares/utils';

/**
 * Get all Users
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */

export const fetchAll = (req, res, next) => {
    getAllUser()
    .then(data => res.json({data}))
    .catch(err => utils.handleError(res, err))
}

/**
* GET single-user
 */

export const fetchOne = (req, res, next) => {
    getOneUser(req.params.id)
      .then(data => res.json({data}))
      .catch(err => utils.handleError(res, err));
};