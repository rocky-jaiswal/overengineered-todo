import axios from 'axios'

export const getUser = async (id: string) => {
  const res = await axios.get(`/api/user/${id}`)
  return res.data
}
