import Post from "../models/Post.js";
import User from "../models/User.js";

export async function getNewPostPage (req, res) {
    
}

export async function getPosts (req, res) {
	
}

export async function postPosts (req, res) {

	const newPost = {
		title: req.body.title,
		description: req.body.description,
		content: req.body.content,
		image: req.file.filename,
	}

	try {

	} catch (error) {

	}

};
