import axios from 'axios'

export const getUser = async () => {
  const res = await axios.get('/api/users')
  return res.data
}

export const createUser = async ({
  email,
  password,
  confirmedPassword
}: Record<string, string>) => {
  const res = (await axios.post('/api/users', { email, password, confirmedPassword })) as {
    data: Record<string, string>
  }
  return res.data
}
