const express = require('express')
const {
  getCommentHandler,
  deleteCommentHandler,
  getCommentsHandler,
  postCommentsHandler,
} = require('../controllers/commentController')
const commentRouter = express.Router()

commentRouter.route('/').get(getCommentsHandler).post(postCommentsHandler)
commentRouter
  .route('/:commentId')
  .get(getCommentHandler)
  .delete(deleteCommentHandler)

module.exports = commentRouter
