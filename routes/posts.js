import express from 'express';
import * as controllerPosts from '../controller/posts.js';
const router = express.Router();

router.get('/', controllerPosts.getPosts);
router.get('/new', controllerPosts.getNewPostPage);
router.post('/', controllerPosts.postPosts);

export default router;