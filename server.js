const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser') 
const app = express()

const main = async () => { 
  
  app.use(bodyParser.json())
  app.use(cors())
  // all routers is called here
  app.use(require('./routes/index'))

  // default not found response
  app.use((req, res) => {
    res.status(404).send('Resource not found')
  })

  // default error response
  app.use((err, req, res, next) => {
    return res
      .status(500)
      .json({ statusCode: 422, message: err.message, stack: err.stack })
  })

  // application is running in localhost port 8000
  app.listen(8000, () => {
    console.info(`Server is running on Port:8000`)
  })
 
  return app
}

module.exports = main()