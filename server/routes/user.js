const express = require("express");
const { userWelcome } = require("../controllers/user");
const authVerification = require("../middleware/auth");

const router = express.Router();

// user
router.get('/', authVerification, userWelcome);

// export default router;
module.exports = router;