import express from 'express';
import * as controllerIndex from '../controller/index.js';
import * as auth from '../controller/auth.js';
const router = express.Router();

router.get('/', controllerIndex.getFeed);

// AUTH
router.get('/login', auth.login);
router.get('/logout', auth.logout);
router.get('/callback', auth.callback);

export default router;