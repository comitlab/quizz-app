import {getAllUser} from '../services/userService';
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