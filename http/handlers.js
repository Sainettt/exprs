const comments = require('./data')
const fs = require('fs')
const qs = require('querystring')
function getHome(req, res) {
  fs.readFile('./files/comment-form.html', (err, data) => {
    if (err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end('Server error while loading HTML file')
      return
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  })
}
function getHtml(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello HTML</h1>')
}
function getComments(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(comments))
}
function getText(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello TEXT')
}
function handleNotFound(req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end('404 Not Found')
}
function postComment(req, res) {
  res.setHeader('Content-Type', 'text/plain')
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        const comment = qs.parse(body)
        comments.push(comment)
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Comment received</h1>')
        res.write('<a href="/">Submit one more comment</a>')
        res.end()
      } catch (error) {
        res.statusCode = 400
        res.end('Invalid Form data')
      }
    })
  } else if (req.headers['content-type'] === 'application/json') {
    let commentJSON = ''
    req.on('data', (chunk) => {
      commentJSON += chunk.toString()
    })
    req.on('end', () => {
      try {
        comments.push(JSON.parse(commentJSON))
        console.log(commentJSON)
        res.statusCode = 200
        res.end('Comment received')
      } catch (error) {
        res.statusCode = 400
        res.end('jSON Invalid')
      }
    })
  } else {
    res.statusCode = 400
    res.end('400 json suka nada or form kurwa')
  }
}
module.exports = {
  getHtml,
  getComments,
  getText,
  handleNotFound,
  postComment,
  getHome,
}
