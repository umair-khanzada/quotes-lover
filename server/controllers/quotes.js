const Quotes = require('../model/quote');


module.exports.getQuotes = async function (req, res) {
    try {
        const quotes = await Quotes.find();
        console.log("GET QUOTES", quotes);
        return res.status(200).json(quotes);

        // if (user && (await bcrypt.compare(password, user.password))) {
        //     const token = jwt.sign(
        //         { user_id: user._id, email },
        //         process.env.TOKEN_KEY,
        //         {
        //             expiresIn: "2h",
        //         }
        //     );

        //     user.token = token;
        //     return res.status(200).json(user);
        // }
        // res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log("Error", error);
        res.status(400).send(error.message);
    }
}

module.exports.postQuotes = async function (req, res) {
    try {
        const {
            quote,
            author
        } = req.body;

        const quotes = await Quotes.create({
            quote,
            author
        });
        console.log("POST QUOTES", quotes);
        return res.status(200).json(quotes);

        // if (user && (await bcrypt.compare(password, user.password))) {
        //     const token = jwt.sign(
        //         { user_id: user._id, email },
        //         process.env.TOKEN_KEY,
        //         {
        //             expiresIn: "2h",
        //         }
        //     );

        //     user.token = token;
        //     return res.status(200).json(user);
        // }
        // res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log("Error", error);
        res.status(400).send(error.message);
    }
}