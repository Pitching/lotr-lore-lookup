import './App.css'
import { useState } from 'react'

function App() {
  const [selection, setSelection] = useState('')

  const categories = [
    'Books',
    'Movies',
    'Characters',
    'Quotes',
  ]

  return (
    <>
      <div>
        <h1>Categories</h1>
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

export default App
