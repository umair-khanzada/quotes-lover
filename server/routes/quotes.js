const express = require("express");
const { getQuotes,postQuotes } = require("../controllers/quotes");
const authVerification = require("../middleware/auth");

const router = express.Router();

// user login
router.get('/', getQuotes);


// user
router.post('/', authVerification, postQuotes);

// export default router;
module.exports = router;