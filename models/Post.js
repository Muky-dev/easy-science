import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({

    title: {
        type: String,
        max: 30,
        required: true,
        unique: true,
        lowercase: true,
    },

    description: {
        type: String,
        max: 30,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    },

}, {
	timestamps: true,
});

const Post = mongoose.model('Post', PostSchema);

export default Post;