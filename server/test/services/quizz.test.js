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
            const expectedErr = 'expectedErr';
            const spyFindItems = spyOn(service, 'getAllQuizz').and.returnValue(Promise.reject(expectedErr));
            const spyBuildErrorObject = spyOn(utils, 'buildErrObject');
            // When

            service.getAllQuizz().then(() => {
                // Then
                expect(spyFindItems).toHaveBeenCalledTimes(1);
                expect(spyBuildErrorObject).toHaveBeenCalledTimes(1);
                expect(spyBuildErrorObject).toHaveBeenCalledWith(expectedErr);
                expect(res.statusCode).toEqual(422);
                expect(res.body.errors.code).toEqual(422);
                expect(res.body.errors.message).toEqual(spyBuildErrorObject.err.message);
                done();
            });
        });

        it('Should get Quizz items from getAllQuizz return promise with resolve', (donne) => {
            // Given
            const expectedItems = 'expectedItems';
            const spyGetAllQuizz = spyOn(service, 'getAllQuizz').and.returnValue(Promise.resolve(expectedItems));
            // When

            service.getAllQuizz().then(() => {
                // Then
                expect(spyGetAllQuizz).toHaveBeenCalledTimes(1);
                expect(res.resolve).toHaveBeenCalledTimes(1);
                expect(res.resolve).toHaveBeenCalledWith({items: expectedItems});
            })
            donne();
        });
    });
});
