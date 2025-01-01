import './Book.css'

interface BookProps {
  title: string
  onClick: () => void
}

function Book({ title, onClick}: BookProps) {
  return (
    <>
    <div className="book" onClick={onClick}>

    </div>
    </>
  )
}

export default Book