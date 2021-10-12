const User = require('../model/user')

module.exports.userWelcome = async function (req, res) {
    try {
        const { email, user_id } = req.user;
        let user = await User.findOne({ email });
        delete user.password;
        console.log("WELCOME::",user);
        res.status(200).send(user);
    } catch (error) {
        console.log("Error", error);
        res.status(400).send(error.message);
    }
}