const User = require("../models/userModel");

const usersController = {};

usersController.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({});

        if (!users) {
            return res.status(404).json({ message: 'No users found' })

        }

        res.locals.users = users;

        return next();
    } catch (e) {
        console.log(e);
        return next(e);
    }
};

usersController.createUser = async (req, res, next) => {

    const { host, username, password } = req.body;

    try {
        const newUser = await User.create({ host: host, username: username, password: password });

        res.locals.newUser = newUser;

        return next();
    } catch (e) {
        console.log(e);
        return next(e);
    }
};

module.exports = usersController;