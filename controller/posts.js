import Post from "../models/Post.js";
import User from "../models/User.js";

export async function getNewPostPage (req, res) {
  
}

export async function getSinglePost (req, res) {
	const postId = req.params.id 

	try {
		const postFind = await Post.find({ _id: postId });
		
		res.render('post/post', { content: postFind });
	} catch (error) {
		res.redirect('/');
	}
	
}

export async function postPosts (req, res) {

	const newPost = {
		title: req.body.title,
		description: req.body.description,
		content: req.body.content,
		user: req.body.user,
		// image: req.file.filename,
	}

	try {
		console.log(newPost);
		await new Post(newPost).save();
	} catch (error) {
		console.error(error);
	}

};

export async function patchPosts (req, res) {

	if (req.body.title != null)
		res.post.title = req.body.title;
	if (req.body.description != null)
		res.post.description = req.body.description;
	if (req.body.content != null)
		res.post.content = req.body.content;

	try {
		console.log(res.post);
		await res.post.save();
	} catch (error) {
		console.error(error);
	}

}

export async function deletePosts (req, res) {

	try {
    await res.post.remove();
		console.log("post removed")
  } catch (error) {
		console.error(error);
  }

}