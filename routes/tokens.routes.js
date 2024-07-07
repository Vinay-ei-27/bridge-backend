import express from 'express';
import TokensController from '../controllers/tokens.controller.js';
const tokenController = new TokensController();

const router = express.Router();

router.get('/', tokenController.getTokens);

export default router;
