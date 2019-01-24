import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import messages from './messages'

export default () => {
  const app = express()

  // setup middlewear
  app.use(bodyParser.json())
  app.use(helmet())

  // setup routes
  app.use('/messages', messages)

  // default not found handler
  app.use((req, res, next) => {
    res.sendStatus(404)
  })

  // default error handler
  app.use((err, req, res, next) => {
    console.error(err)
    if (err.statusCode == 400) res.sendStatus(400)
    else res.sendStatus(500)
  })

  return app
}
