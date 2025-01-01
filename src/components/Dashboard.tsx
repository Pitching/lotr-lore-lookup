import { useState } from 'react'
import useFetchData, { Data } from '@/hooks/useFetchData'
import './Dashboard.css'
import Book from './Book'

function Dashboard() {
  const [selection, setSelection] = useState('')

  const {data, loading, error} = useFetchData(selection)

  const categories = [
    'Books',
    'Movies',
    'Characters',
  ]

  const handleBookClick = (bookName: string) => {
    console.log(`Book clicked: ${bookName}`)
  }

  return (
    <>
      <div className="categoryContainer">
        <ul className="categoryList">
          {categories.map((category, index) => (
            <li key={index}>
              <button onClick={() => setSelection(category)}>{category}</button>
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
        {selection && (
          <ul>
            {data.map(data => (
              <li key={data._id}>{data.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Dashboard