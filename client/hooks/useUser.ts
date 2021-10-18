import useSWR from 'swr'

import { getUser } from './../lib/api/user'

export default function useUser() {
  const { data, mutate, error } = useSWR('/api/user', getUser)

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  }
}
