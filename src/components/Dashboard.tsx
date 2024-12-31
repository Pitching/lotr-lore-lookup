import { useState } from 'react'
import useFetchData from '@/hooks/useFetchData'
import './Dashboard.css'

function Dashboard() {
  const [selection, setSelection] = useState('')

  const {data, loading, error} = useFetchData(selection)

  const categories = [
    'Books',
    'Movies',
    'Characters',
    'Quotes',
  ]

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