const express = require('express')
const commentRouter = express.Router()

const getCommentsHandler = (req, res) => {
  res.send('Get comments route!')
}
const getPostCommentsHandler = (req, res) => {
  res.send('Post comments route!')
}
const getCommentHandler = (req, res) => {
  const { commentId } = req.params
  res.send(`Get comment with ID: ${commentId}`)
}
console.log(`arow fn ${typeof getCommentsHandler}`)
commentRouter
  .route('/commets')
  .get('/comments', getCommentsHandler)
  .post('/comments', getPostCommentsHandler)
  .get('/comments/:commentId', getCommentHandler)
