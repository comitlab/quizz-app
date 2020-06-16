import * as  service from '../../src/api/services/quizzService';
import * as utils from '../../src/api/middlewares/errorHandler';

const expect = require('chai').expect;

describe('Service quizz', () => {
    let res; // A resolve or a Reject
    
    beforeEach(() => {
        res = jasmine.createSpyObj('res', ['resolve, reject']); // err
    })
    describe('getAllQuizz', () => {
        it('Should return buildErrorObject with error code status 422 and message when try to find Quizz items', (done) => {
            // Given
            const expectedReject = 'expectedReject';
            const spyFindItems = spyOn(service, 'getAllQuizz').and.returnValue(Promise.reject(expectedReject));
            const spyBuildErrorObject = spyOn(utils, 'buildErrObject');
            // When

            service.getAllQuizz().catch(() => {
                // Then
                expect(spyFindItems).toHaveBeenCalledTimes(1);
                expect(spyBuildErrorObject).toHaveBeenCalledTimes(1);
                expect(spyBuildErrorObject).toHaveBeenCalledWith(expectedReject);
                expect(res.statusCode).toEqual(422);
                expect(res.body.errors.code).toEqual(422);
                expect(res.body.errors.message).toEqual(spyBuildErrorObject.err.message);
                done();
            });
        });

        it('Should get Quizz items from getAllQuizz return promise with reject and resolve', (donne) => {
            // Given
            const expectedIems = 'expectedIems';
            const spyGetAllQuizz = spyOn(service, 'getAllQuizz').and.returnValue(Promise.resolve(expectedIems));
            // When

            service.getAllQuizz().find(() => {
                // Then
                expect(spyGetAllQuizz).toHaveBeenCalledTimes(1);
                expect(res.resolve).toHaveBeenCalledTimes(1);
                expect(res.resolve).toHaveBeenCalledWith({items: expectedIems});
            })
            donne();
        });
    });
});