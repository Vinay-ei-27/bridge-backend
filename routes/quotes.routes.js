import express from 'express';
import QuotesController from '../controllers/quotes.controller.js';
const quotesController = new QuotesController();

const router = express.Router();

router.post('/', quotesController.getQuote);

export default router;
