import { useEffect } from 'react'

export interface Data {
  _id: string
  name: string
}

function useFetchData(
  selection: string,
  setData: (data: Data[]) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void
) {
  const url = 'https://the-one-api.dev/v2/'

  useEffect(() => {
    async function fetchData() {
      if (!selection) {
        return
      }
      setLoading(true)
      setError(null)
      try {
        let endpoint = ''
        switch (selection) {
          case 'Books':
            endpoint = 'book'
            break
          case 'Movies':
            endpoint = 'movie'
            break
          case 'Characters':
            endpoint = 'character'
            break
          case 'Quotes':
            endpoint = 'quote'
            break
          default:
            throw new Error('Invalid selection')
        }
        const res = await fetch(url + endpoint, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
          }
        })

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

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
    fetchData()
  }, [selection, setData, setLoading, setError])
}

export default useFetchData