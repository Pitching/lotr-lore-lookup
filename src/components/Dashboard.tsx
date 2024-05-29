import { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const [selection, setSelection] = useState('')

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
      </div>
    </>
  )
}

export default Dashboard