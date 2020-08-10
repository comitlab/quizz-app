import express from 'express';
import passport from'passport';
import * as quizzController from '../controllers/quizz';
import * as questionController from '../controllers/question';

const router = express.Router();

const requireAuth = passport.authenticate('jwt', {
  session: false,
});

/**
 * GET /api/quizz
 */
router.get('/', quizzController.fetchAll);

/**
 * GET single-quizz by ID param
 */
router.get('/:id', quizzController.fetchOne);

/**
 * GET all questions by quizz
 */
router.get('/:id/questions', questionController.fetchAll);

/**
 * GET all questions by quizz
 */
router.get('/:id/questions/:id', questionController.fetchOne);

export default router;
