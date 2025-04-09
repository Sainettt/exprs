const express = require('express');
const commentRouter = require('./comments');
const userRouter = require('./users');
const rootRouter = require('./root');

const router = express.Router();

router.use('/comments', commentRouter)
router.use('/users', userRouter)
router.use('/', rootRouter)

module.exports = router;