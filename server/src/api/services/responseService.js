import Response from '../models/response';
import * as utils from '../middlewares/utils';

// import Boom from '@hapi/boom';

/**
 * Get all responses
 * 
 * @returns {Promise}
 */

 export const getAllResponses = () => 
    new Promise((resolve, reject) => {
        Response.find(
            {},
            '-updatedAt -createdAt',
            {
                sort: {
                    title: 1,
                },
            },
            (err, responses) => {
                if(err) {
                    reject (utils.buildErrObject(422, err.message));

                    return;
                }
                resolve(responses)
            },
        );
    });

export const getOneResponse = (id) => 
    new Promise((resolve, reject) => {
        Response.fondOne({_id: id}, 
            '-updatedAt -createdAt',
            {},
            (err, response) => {
                if(err) {
                    reject (utils.buildErrObject(402, err.message));

                    return;
                }
                resolve(response);
            })
    })