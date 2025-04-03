const express = require('express')
const commentRouter = require('./routes/comments')
const app = express()

const getRouteHandler = (req, res) => {
  res.send('Get root route!')
}
app.use('/comments', commentRouter)
app.get('/', getRouteHandler)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
