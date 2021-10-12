const express = require("express");
const { userLogin } = require("../controllers/login");

const router = express.Router();

// user login
router.post('/', userLogin);

// export default router;
module.exports = router;