import { useCallback, useEffect, useState } from 'react'

const useAsync = <T, E = string>(
  asyncFunction: (params?: any) => Promise<T>,
  params?: any,
  immediate = true
) => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(
    (params) => {
      setStatus('pending')
      setValue(null)
      setError(null)
      return asyncFunction(params)
        .then((response: any) => {
          setValue(response)
          setStatus('success')
        })
        .catch((error: any) => {
          setError(error)
          setStatus('error')
        })
    },
    [asyncFunction, params]
  )

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute(params)
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}

export default useAsync
