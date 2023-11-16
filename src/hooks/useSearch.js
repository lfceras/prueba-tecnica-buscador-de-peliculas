import { useEffect, useRef, useState } from "react"

export const useSearch = () => {
  const isFirstInput = useRef(true)
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('Ingresa el nombre de un peli')
      return
    }

    setError(null)
  }, [query])

  return {
    setQuery,
    error,
    query
  }
}