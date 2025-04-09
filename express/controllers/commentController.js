const getCommentsHandler = (req, res) => {
    console.log({ params: req.params, method: 'methodGet' })
    res.send('Get comments route!')
  }
  const postCommentsHandler = (req, res) => {
    console.log({ params: req.params, method: 'methodPost' })
    res.send('Post comments route!')
  }
  const getCommentHandler = (req, res) => {
    const { commentId } = req.params
    console.log({ params: req.params, method: 'getCommentId' })
    res.send(`Get comment with ID: ${commentId}`)
  }
  const deleteCommentHandler = (req, res) => {
    const { commentId } = req.params
    console.log({ params: req.params, method: 'deleteCommentId' })
    res.send(`Delete comment with ID: ${commentId}`)
  }
  module.exports = {
    getCommentsHandler,
    postCommentsHandler,
    getCommentHandler,
    deleteCommentHandler
  }