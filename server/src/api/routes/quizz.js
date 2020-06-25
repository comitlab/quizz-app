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
router.get('/all', quizzController.fetchAll);

/**
 * GET single-quizz by ID param
 */
router.get('/quizz/:id', quizzController.fetchOne);

/*
router.get('/quizz/:id', (req, res, next) => {
  Quizz.findOne({ _id: req.params.id })
    .then(quizz => res.status(200).json(quizz))
    .catch(err => res.status(404).json({ err }));
});
*/

export default router;
