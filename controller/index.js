import passport from 'passport';
import passportLocal from 'passport-local';
import User from "../models/User.js";
import Post from "../models/Post.js";

export async function getFeed(req, res) {
    let posts
    try {
        posts = await Post.find().exec();
    } catch {
        posts = []
    }
    res.render('index', { posts: posts });
}

export async function newUser(req, res) {
    const { username, email, nickname, password } = req.body;
    const localStrategy = new passportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password'
    });
    passport.use('signup', localStrategy, async (email, password, done) => {
        
    });
    try {
        const newUser = await new User(
            {
                username: username,
                email: email,
                nickname: nickname,
                password: password
            }).save();
        res.json(newUser);
    } catch (error) {
        res.json(error);
    }
}

export async function generateToken(req, res) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email: email, password: password });
        const payload = { id: user._id };
        const token = jwt.encode(payload, cfg.jwtSecret);
        res.json({ token: token });
    } catch (error) {
        res.json(error);
    }
}