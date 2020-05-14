// Printer functions

//Create book card

const createABookCard = (singleBook) => {
    return `
    <div class="book-card" id="book-card-${singleBook.id}">
    <h4 id="book-title">${singleBook.title}</h4>
<p id="book-author">${singleBook.author}</p>
<p id="book-isbn">${singleBook.ISBN}</p>
<button id="delete-btn-${singleBook.id}">Delete</button>
<button id="edit-btn-${singleBook.id}">Edit</button>
</div>
`
}

export default createABookCard
