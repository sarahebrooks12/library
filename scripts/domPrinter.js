// Printer functions

//Create book card

const createABookCard = (singleBook) => {
    return `
    <div id="book-card"
    <h4 id="book-title">${singleBook.title}</h4>
<p id="book-author">${singleBook.author}</p>
<p id="book-isbn">${singleBook.ISBN}</p>
</div>
`
}


