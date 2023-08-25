const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);

router.get('/axios', controller.getAxios);

router.post('/axios', controller.postAxios);

exports.router = router;
