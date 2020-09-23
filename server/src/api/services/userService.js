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

/**
 * Get all one user.
*/

export const getOneUser = (id) =>
  new Promise((resolve, reject) => {
    User.findOne({ _id: id},
      '-updatedAt -createdAt',
      {},
      (err, item) => {
        if(err) {
          reject(utils.buildErrObject(402, err.message));

          return;
        }
        resolve(item);
    }
  )
})