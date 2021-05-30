import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	
    username: {
        type: String,
        max: 30,
        required: true,
        unique: true,
        lowercase: true,
    },
    
    email: {
        type: String,
        max: 50,
        required: true,
        unique: true,
        lowercase: true,
    },

    nickname: {
        type: String,
        max: 30,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    coverImage: {
        type: String,
    },

});

const User = mongoose.model('User', UserSchema);

export default User;