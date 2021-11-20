import bcrypt from 'bcrypt'

import db from '../repositories/db'

interface HasUserCredentials {
  email: string
  password: string
  userId?: string
}

const SALT_ROUNDS = 10

const createUserInDB = async (params: HasUserCredentials) => {
  const encryptedPassword = await bcrypt.hash(params.password, SALT_ROUNDS)

  await db('users').insert({ email: params.email, encrypted_password: encryptedPassword })

  const id = await db('users').where({ email: params.email }).select('id').first()

  params.userId = id as string

  return params
}

export default createUserInDB
