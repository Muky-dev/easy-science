import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import expressSession from 'express-session';
import multer from 'multer';
import expressLayouts from 'express-ejs-layouts';

if (process.env.NODE_ENV !== 'production') { dotenv.config(); }

// APP
const app = express();
const PORT = process.env.PORT || 3000;

// EJS

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ limit: '10mb', extended: 'false' }));

// EXPRESS SESSION
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false,
}));

// If HTTPS use secure cookies
if (process.env.NODE_ENV === 'production') session.cookie.secure = true;

// PASSPORT
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});

// ROUTES
import indexRouter from "./routes/index.js";
app.use('/', indexRouter);
import postsRouter from "./routes/posts.js";
app.use('/posts', postsRouter);
import profileRouter from "./routes/profile.js";
app.use('/profile', profileRouter);

// MONGOOSE
try {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.info("database connected");
} catch (error) {
    console.error(error);
    process.exit(1);
}

// LISTEN
app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`);
});