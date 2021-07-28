import { v4 as uuid } from 'uuid'
import redis from '../../utils/redis'

export default async function sendMessage(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }
  const { message, expiresIn } = req.body
  if (message && expiresIn) {
    // save to redis
    const id = uuid()
    await redis.set(id, message, 'EX', Number(expiresIn))
    return res.status(200).json({ id })
  }
  res.status(400).send('Bad Request')
}
