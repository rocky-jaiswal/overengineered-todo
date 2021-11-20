import { pipeAsync } from '@rockyj/async-utils'
import { FastifyReply, FastifyRequest } from 'fastify'

import createUserInDB from '../../../actions/createUserInDB'
import createToken from '../../../actions/createToken'

export class CreateUserState {
  public readonly email: string
  public readonly password: string
  public readonly confirmedPassword?: string

  public userId?: string
  public token?: string

  public constructor(email: string, password: string, confirmedPassword: string) {
    this.email = email
    this.password = password
    this.confirmedPassword = confirmedPassword
  }
}

const validateRequest = async (params: CreateUserState) => {
  if (
    !params.email.match(/@/) ||
    params.password.length < 6 ||
    params.password !== params.confirmedPassword
  ) {
    throw new Error('Bad user credentials provided!')
  }

  return params
}

const createUser = async (request: FastifyRequest, response: FastifyReply) => {
  try {
    const { email, password, confirmedPassword } = request.body as Record<string, string>

    const state = new CreateUserState(email, password, confirmedPassword)

    const updatedState = await pipeAsync<CreateUserState>(
      validateRequest,
      createUserInDB,
      createToken
    )(state)

    response.send({ token: updatedState.token })
  } catch (err) {
    request.log.error('Error in user creation')
    request.log.error({ err })
    // TODO: Better error code
    response.code(500).send({ error: 'error in create-user' })
  }
}

export default createUser
