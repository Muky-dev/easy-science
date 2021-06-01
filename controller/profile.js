import User from "../models/User.js";



export async function getProfile(req, res) {
    try {
        const user = await User.findOne({ _id: req.user.id });
        res.json({ user: user });
    } catch (error) {
        res.json(error);
    }
}


