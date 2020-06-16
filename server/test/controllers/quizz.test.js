import * as  service from '../../src/api/services/quizzService';
import * as  controller from '../../src/api/controllers/quizz';
import * as utils from '../../src/api/middlewares/errorHandler';

const expect = require('chai').expect;

describe('Controller Quizz', () => {
  let req, res;
  beforeEach(() => {
    req = jasmine.createSpyObj('req', ['send'])
    res = jasmine.createSpyObj('res', ['json'])
  })
  describe('fetchAll', () => {
    it('should get data from getAllQuizz and res.json with data', (done) => {
      // Given
      const expectedData = 'expectedData'
      const spyGetAllQuizz = spyOn(service, 'getAllQuizz').and.returnValue(Promise.resolve(expectedData))

      // WHEN
      controller.fetchAll(req, res).then(() => {
        // THEN
        expect(spyGetAllQuizz).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({data: expectedData});
        done();
      });
    });

    it('should call handerlError with res and error when call getAllQuizz', (done)=> {
      // Given
      const expectedError = 'expectedError'
      const spyGetAllQuizz = spyOn(service, 'getAllQuizz').and.returnValue(Promise.reject(expectedError))
      const spyHandelError = spyOn(utils, 'handleError');

      //When
      controller.fetchAll(req, res).catch(() => {
        //Then
        expect(spyGetAllQuizz).toHaveBeenCalledTimes(1);
        expect(spyHandelError).toHaveBeenCalled(1);
        expect(spyHandelError).toHaveBeenCalledWith(req, expectedError);
        done();
      })
    })
  })
})
