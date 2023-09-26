const express = require('express')
const app = express()
const serverlessExpress = require('@vendia/serverless-express')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

if (process.env.NODE_ENV === `develop`) app.listen(port)

exports.handler = serverlessExpress({ app })
