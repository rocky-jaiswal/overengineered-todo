import db from '../repositories/db'

interface HasUserCredentials {
  email: string
  password: string
  userId?: string
  encryptedPassword?: string
}

const fetchUserFromDB = async (params: HasUserCredentials) => {
  const obj = await db('users')
    .where({ email: params.email })
    .select(['id', 'encrypted_password'])
    .first()

  params.userId = obj.id as string
  params.encryptedPassword = obj.encrypted_password as string

  return params
}

export default fetchUserFromDB
