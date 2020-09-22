import express from 'express';
import * as userController from '../controllers/user';

const router = express.Router();

/**
 * GET /api/quizz
 */
router.get('/users', userController.fetchAll);

export default router;

