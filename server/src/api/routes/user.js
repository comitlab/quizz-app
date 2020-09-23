import express from 'express';
import * as userController from '../controllers/user';

const router = express.Router();

/**
 * GET /api/quizz
 */
router.get('/', userController.fetchAll);

/**
 * GET single-user by ID param
 */
router.get('/:id', userController.fetchOne);

export default router;

