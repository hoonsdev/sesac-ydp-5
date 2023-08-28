const express = require('express');
const controller = require('../controller/Cvisitor');
// 라우터 기능
const router = express.Router();

router.get('/', controller.main);

router.get('/visitors', controller.getVisitors);

module.exports = router;
