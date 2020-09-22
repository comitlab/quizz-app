import User from '../models/user';
import * as  utils from '../middlewares/utils';

/**
 * Get all users
 * 
 * @returns {Promise}
 */

export const getAllUser = () => 
    new Promise((resolve, reject) => {
        User.find(
            {},
            '-updatedAt -createdAt',
            {
                sort: {
                    name: 1,
                },
            },
            (err, items) => {
                if (err) {
                    reject(utils.buildErrObject(422), err.message);

                    return;
                }
                resolve(items);
            },
        );
    });