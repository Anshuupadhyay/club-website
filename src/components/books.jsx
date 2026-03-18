function Books() {

  const books = [
    "Science",
    "Mathematics",
    "History",
    "Literature",
    "Technology"
  ]

  return (
    <section className="books">

      <h2>Library Categories</h2>

      <div className="book-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            {book}
          </div>
        ))}
      </div>

    </section>
  )
}

export default Books