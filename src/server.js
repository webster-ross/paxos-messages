import express from 'express'
import helmet from 'helmet'

export default () => {
  const app = express()

  // setup middlewear
  app.use(helmet())

  // setup routes
  app.get('/', (req, res) => res.json(`Challenge #1 - v${process.env.npm_package_version}`))

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
