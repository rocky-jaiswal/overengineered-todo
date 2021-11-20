import axios from 'axios'

export const createSession = async ({ email, password }: Record<string, string>) => {
  const res = (await axios.post('/api/sessions', { email, password })) as {
    data: Record<string, string>
  }
  return res.data
}
