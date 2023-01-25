const express = require("express")
const userRouter = express.Router()
const Users = require("../controller/users")

// assign controller to routes
userRouter.post("/login", Users.login)
userRouter.post("/register", Users.register)

module.exports = userRouter;