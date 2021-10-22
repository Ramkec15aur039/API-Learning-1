/** *************************** package Import *************************************** */
const express = require('express');

/** *************************** Import Route *************************************** */
const userRoute = require('./user.route');

const router = express.Router();

router.use('/users', userRoute);

module.exports = router;