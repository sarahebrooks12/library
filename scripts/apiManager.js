// Fetch calls
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
  grabBookObject: () => {
    fetch("http://localhost:8088/books", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObject),
    });
  },
};
fetchCalls.printOnPageLoad();

