import express from 'express';
// import passport from'passport';
import * as quizzController from '../controllers/quizz';
import * as questionController from '../controllers/question';
import * as responseController from '../controllers/response';

const router = express.Router();

/**
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
 * GET one questions by quizz
 */
router.get('/:id/questions/:id', questionController.fetchOne);

/**
 * GET all responses by question
 */
router.get('/:id/questions/:id/responses', responseController.fetchAll);

/**
 * GET one response by question
 */
router.get('/:id/questions/:id/responses/:id', responseController.fetchOne);

export default router;