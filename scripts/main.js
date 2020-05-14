// ES6 --- Will be only linked in Index
//book-container
//author-input title-input isbn-input save-btn
// import eventListeners from "./eventListeners.js"
import createABookCard from "./domPrinter.js";
import apiManager from "./apiManager.js";



const container = document.querySelector("#book-container");

apiManager.printOnPageLoad();

document.querySelector("body").addEventListener("click", function () {
  // console.log("this should be save", event.target.id);
  const authorValue = document.querySelector("#author-input").value;
  const titleValue = document.querySelector("#title-input").value;
  const ISBNValue = document.querySelector("#isbn-input").value;
  console.log(authorValue, titleValue, ISBNValue);
  
  const bookObject = {    
      title: titleValue,
      author: authorValue,
      ISBN: ISBNValue,
     };
  if (event.target.id === "save-btn") {
    container.innerHTML += "";
    apiManager.grabBookObject(bookObject).then(() => {
      apiManager.printOnPageLoad();
      console.log(bookObject);
      container.innerHTML += createABookCard(bookObject);
    });
  } else if (event.target.id.includes("delete-btn")) {
    container.innerHTML = "";
    const primaryKey = event.target.id.split("-")[2];
    console.log(primaryKey);
    apiManager.deleteBookObject(primaryKey).then(apiManager.printOnPageLoad);
  } else if (event.target.id.includes("edit-btn")) {
    
  }
});


//edit button
//edit form
//edit new card
//edit save changes
//edit refresh on page
