import express from 'express';
import * as controllerPosts from '../controller/posts.js';
import Post from "../models/Post.js";

const router = express.Router();

router.get('/new', controllerPosts.getNewPostPage);

router.get('/:id', controllerPosts.getSinglePost);
router.post('/', controllerPosts.postPosts);
router.patch('/:id', getPostId, controllerPosts.patchPosts);
router.delete('/:id', getPostId, controllerPosts.deletePosts);

async function getPostId (req, res, next) {

	let post;

	try {
		post = await Post.findById(req.params.id);
		if (post == null) {console.log("post null")};
	} catch (error) {
		console.log(error);
	}

	res.post = post;

	next();

}

export default router;