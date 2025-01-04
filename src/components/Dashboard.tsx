import { useState } from 'react'
import useFetchData, { Data } from '@/hooks/useFetchData'
import Book from './Book'
import './Dashboard.css'

function Dashboard() {
  const [selection, setSelection] = useState('')
  const [data, setData] = useState<Data[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const categories = [
    'Books',
    'Movies',
    'Characters',
  ]

  const handleCategoryClick = (category: string) => {
    setSelection(category)
    setData([]) // Clear the current data
    setLoading(true)
    setError(null)
  }

  useFetchData(selection, setData, setLoading, setError)

  const handleBookClick = (bookName: string) => {
    console.log(`Book clicked: ${bookName}`)
  }

  return (
    <>
      <div className="categoryContainer">
        <ul className="categoryList">
          {categories.map((category, index) => (
            <li key={index}>
              <button onClick={() => handleCategoryClick(category)}>{category}</button>
            </li>
          ))}
        </ul>
        <h1>{selection}</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {selection === 'Books' && (
          <div className="books-container">
            {data.map((book: Data) => (
              <Book
                key={book._id}
                title={book.name}
                onClick={() => handleBookClick(book.name)}
              />
            ))}
          </div>
        )}
        {selection && selection !== 'Books' && (
          <ul>
            {data.map((item: Data) => (
              <li key={item._id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Dashboard