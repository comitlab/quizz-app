import * as  service from '../../src/api/services/quizzService';
import * as  controller from '../../src/api/controllers/quizz';

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
  })
})
