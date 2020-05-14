// ES6 --- Will be only linked in Index
//book-container
//author-input title-input isbn-input save-btn
// import eventListeners from "./eventListeners.js"
import createABookCard from "./domPrinter.js"
import apiManager from "./apiManager.js"

const container = document.querySelector("#book-container");

apiManager.printOnPageLoad()



 document.querySelector("body").addEventListener("click", function () {
    // console.log("this should be save", event.target.id);
  
    if (event.target.id === "save-btn") {
      container.innerHTML += "";
       const authorValue = document.querySelector("#author-input").value;
       const titleValue = document.querySelector("#title-input").value;
      const ISBNValue = document.querySelector("#isbn-input").value;
      console.log(authorValue, titleValue, ISBNValue);
      const bookObject = {
          title: titleValue,
          author: authorValue,
          ISBN: ISBNValue
      }
     apiManager.grabBookObject(bookObject).then((dirtyBooks) => dirtyBooks.json())
.then(()=> {
  console.log(bookObject)
  container.innerHTML += createABookCard(bookObject)
})
  
}})