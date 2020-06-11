const router = require("../quizz.js");
const useSpy = jest.fn();
const listenSpy = jest.fn();
import request from 'supertest';

jest.doMock('express', () => {
    return () => ({
        listen: listenSpy,
        use: useSpy
    });
});

describe('should get /api/quizz', () => {
    it('should get all quizz from /api/quizz', done => {
        request(router).get('/all');
            expect(router.get).toHaveBeenCalledWith('/all', quizzController.fetchAll);
            done();
    })
});