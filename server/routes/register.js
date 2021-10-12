const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// importing user context
const { userRegistration } = require("../controllers/register");

const router = express.Router();

// userRegister
router.post('/',userRegistration);


// export default router;
module.exports = router;
