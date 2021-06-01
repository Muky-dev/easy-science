import express from 'express';
import * as controllerIndex from '../controller/index.js';
const router = express.Router();

router.get('/', controllerIndex.getFeed);

// AUTH
router.post('/register', controllerIndex.newUser);
router.post('/login', controllerIndex.generateToken);
/*
router.get('/logout', auth.logout);
router.get('/callback', auth.callback);*/

export default router;