const express = require('express')
const userRouter = express.Router()
const {
  getUserIdHandler,
  deleteUserHandler,
  getUsersHandler,
  postUsersHandler,
} = require('../controllers/userController')

userRouter.route('/').get(getUsersHandler).post(postUsersHandler)
userRouter.route('/:userId').get(getUserIdHandler).delete(deleteUserHandler)

module.exports = userRouter
