import {Router} from 'express'
import crypto from 'crypto'
import pg from './postgres'

const router = Router()

// handle POST /messages
router.post('/', async (req, res, next) => {
  const {message} = req.body

  // check if message is valid
  if (typeof message === 'undefined') {
    return res.status(400).send({msg: 'No message specified'})
  }

  // create sha256 hash
  const hash = crypto.createHash('sha256').update(message).digest('hex')

  try {
    // add message & hash to db
    await pg.query(`insert into messages (hash, message) values ($1, $2)
                    on conflict (hash) do nothing`, [hash, message])
    res.send({digest: hash})
  }
  catch(e) { next(e) }
})

// handle GET /message/:hash
router.get('/:hash', async (req, res, next) => {
  const {hash} = req.params

  try {
    // get message from db by hash
    const {rows: [row]} = await pg.query(`select * from messages where hash = $1`, [hash])
    if(!row) res.status(404).send({msg: 'Message not found'})
    else res.send({message: row.message})
  }
  catch(e) { next(e) }
})

export default router
