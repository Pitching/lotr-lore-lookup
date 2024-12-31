import { useState, useEffect } from 'react'

interface Data {
  _id: string
  name: string
}

function useFetchData(selection: string) {
  const [data, setData] = useState<Data[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  
  const url = 'https://the-one-api.dev/v2/'

  useEffect(() => {
    async function fetchData() {
      if (!selection) {
        return
      }
      if (selection === 'Books') {
        setLoading(true)
        setError(null)
        try {
          const res = await fetch(url + 'book', {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
          })
          const data = await res.json()
          setData(data.docs)
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message)
          } else {
            setError('An unknown error occurred')
          }
        } finally {
          setLoading(false)
        }
      }
    }
    fetchData()
  }, [selection])
  return {data, error, loading}
}

export default useFetchData