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

  const handleMovieClick = (movieName: string) => {
    console.log(`Movie clicked: ${movieName}`)
  }

  const handleCharacterClick = (characterName: string) => {
    console.log(`Character clicked: ${characterName}`)
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
        {selection === 'Movies' && (
          <div className="movies-container">
            {data.map((movie: Data) => (
              <button key={movie._id} onClick={() => handleMovieClick(movie.name)}>
                {movie.name}
              </button>
            ))}
          </div>
        )}
        {selection === 'Characters' && (
          <div className="characters-container">
            {data.map((character: Data) => (
              <button key={character._id} onClick={() => handleCharacterClick(character.name)}>
                {character.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Dashboard