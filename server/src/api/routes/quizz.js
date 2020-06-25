import express from 'express';
import passport from'passport';
import * as quizzController from '../controllers/quizz';

const router = express.Router();

const requireAuth = passport.authenticate('jwt', {
  session: false,
});

/**
 * GET /api/quizz
 */
router.get('/all', quizzController.fetchAll);

/**
 * GET single-quizz by ID param
 */
router.get('/quizz/:id', quizzController.fetchOne);


export default router;
