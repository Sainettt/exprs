const http = require('http')
const {
  getComments,
  getHtml,
  getText,
  handleNotFound,
  postComment,
  getHome,
} = require('./handlers')
const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return getHome(req, res)
  }
  if (req.method === 'GET' && req.url === '/html') {
    return getHtml(req, res)
  }
  if (req.method === 'GET' && req.url === '/comments') {
    return getComments(req, res)
  }
  if (req.method === 'GET' && req.url === '/text') {
    return getText(req, res)
  }
  if (req.method === 'POST' && req.url === '/comments') {
    return postComment(req, res)
  }
  handleNotFound(req, res)
})
server.listen(3000, () => {
  console.log(`Derver is running at ${PORT}`)
})
