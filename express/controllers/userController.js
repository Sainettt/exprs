const getUsersHandler = (req, res) => {
  res.send(`Get users route!`)
}
const postUsersHandler = (req, res) => {
  console.log({ params: req.params, method: 'methodPost' })
  res.send('Post users route!')
}
const getUserIdHandler = (req, res) => {
  const { userId } = req.params
  console.log(`Get userId: ${userId}`)
  res.send(`Get user with ID: ${userId}`)
}
const deleteUserHandler = (req, res) => {
  const { userId } = req.params
  console.log({ params: req.params, method: 'deleteUserId' })
  res.send(`Delete user with ID: ${userId}`)
}
module.exports = {
  getUsersHandler,
  postUsersHandler,
  getUserIdHandler,
  deleteUserHandler
}