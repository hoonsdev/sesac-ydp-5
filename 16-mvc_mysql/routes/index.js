const express = require('express');
const controller = require('../controller/Cvisitor');
// 라우터 기능
const router = express.Router();

router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);
router.post('/visitor', controller.postVisitor);
router.delete('/visitor', controller.deleteVisitor);
router.patch('/visitor', controller.editVisitor);

module.exports = router;
