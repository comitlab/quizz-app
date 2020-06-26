import express from 'express';
import passport from'passport';
import * as quizzController from '../controllers/quizz';
// import {Quizz} from '../models/quizz';

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

export default router;
