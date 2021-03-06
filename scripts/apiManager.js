// Fetch calls
import createABookCard from "./domPrinter.js"

const container = document.querySelector("#book-container");

const fetchCalls = {
  printOnPageLoad: () => {
    return fetch("http://localhost:8088/books")
      .then((dirtyBooks) => dirtyBooks.json())
      .then((parsedBooks) => {
        parsedBooks.forEach((singleBook) => {
          container.innerHTML += createABookCard(singleBook);
        });
      });
  },
  grabBookObject: (bookObject) => {
    return fetch("http://localhost:8088/books", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObject),
    });
  },
  deleteBookObject: (id) => {
    return fetch(`http://localhost:8088/books/${id}`, {
      method: "DELETE",
    })
  }
};
// fetchCalls.printOnPageLoad();
export default fetchCalls

