import redis from '../../utils/redis'

export default async function sendMessage(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed')
  }
  const messageId = req.query.id
  const message = await redis.get(messageId)
  return res.status(200).json({ message })
}
