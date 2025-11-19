import express from 'express';
import { AutoController } from '../controllers/AutoController.js'

const router = express.Router();

router.get('/autos', AutoController.getAutos);

export default router