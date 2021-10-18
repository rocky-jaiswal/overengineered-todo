import { FastifyReply, FastifyRequest } from 'fastify'

import signJWT from '../services/signJWT'

const login = async (request: FastifyRequest, response: FastifyReply) => {
  try {
    const { email, password } = request.body as Record<string, string>

    // TODO: Use db lookup, bcrypt etc.
    if (email !== 'foo@example.com' || password !== 'bar') {
      throw new Error('Bad login!')
    }

    const token = signJWT('some-user-id')

    response.send({ token })
  } catch (err) {
    request.log.error('Error in login')
    request.log.error({ err })
    response.code(400).send({ error: 'error in login' })
  }
}

export default login
