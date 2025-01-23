const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post(
    '/register',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password is required').not().isEmpty(),
        check('role', 'Role is required').not().isEmpty()
    ],
    registerUser
);

router.post(
    '/login',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password is required').not().isEmpty()
    ],
    loginUser
);

module.exports = router;
