import express from 'express';
import ParamsController from '../controllers/params.controller.js';
const paramsController = new ParamsController();

const router = express.Router();

router.post('/', paramsController.getParams);

export default router;
