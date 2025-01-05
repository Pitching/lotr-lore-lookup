import './Book.css'

interface BookProps {
  title: string
  onClick: () => void
}

function Book({ title, onClick }: BookProps) {
  // Determine the image URL based on the book title
  const imageUrl = `/images/${title.replace(/\s+/g, '_')}_cover.gif`

  return (
    <div className="book" onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default Book