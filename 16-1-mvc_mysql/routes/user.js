const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);
router.get('/user/signup', controller.signup);
router.get('/user/signin', controller.signin);
router.post('/user/profile', controller.profile);
router.post('/user/signup', controller.register);
router.post('/user/signin', controller.login);

module.exports = router;
