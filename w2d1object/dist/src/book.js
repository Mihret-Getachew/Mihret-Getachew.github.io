/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library,
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
export let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3245,
    },
];
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
export function showTitles() {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */
    const titles = findTitles();
    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");
    let textArea = document.getElementById("displayArea");
    if (textArea) {
        textArea.innerHTML = titleString;
    }
}
/**
 *
 * @return {object} array holding all titles as elements
 */
export function findTitles() {
    //fix this to work according to the specs
    let titles = library.map((book) => book.title).sort();
    return titles;
}
/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
export function addBook() {
    console.log("finish the implementation -- get the author, create a book object, and add to the library array!!");
    const titleInput = document.getElementById("title");
    if (!titleInput)
        return;
    const title = titleInput.value;
    const authorInput = document.getElementById("author");
    if (!authorInput)
        return;
    const author = authorInput.value;
    const book = {
        title: title,
        author: author,
        libraryID: Math.floor(100 + Math.random() * 900),
    };
    library.push(book);
    let textArea = document.getElementById("displayArea");
    if (textArea) {
        textArea.innerHTML += "\n" + book.title;
    }
}
/**
 *
 * @returns {string[]} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
export function findAuthors() {
    //implement this
    const authors = library.map((book) => book.author).sort();
    return authors;
}
/**
 *
 * @returns {number[]} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
 */
export function findIDs() {
    //implement this
    const ids = library.map((book) => book.libraryID).sort();
    return ids;
}
/**
 * @returns {book} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library,
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */
export function createBook(title, author, libraryID) {
    //implement this
    return { title: title, author: author, libraryID: libraryID };
}
/**
 *
 * @returns {undefined}
 */
export function scramble() {
    library = library.sort(() => Math.random() - 0.5);
    const titleString = library.map((book) => book.title).join("\n");
    let textArea = document.getElementById("displayArea");
    if (textArea) {
        textArea.innerHTML = titleString;
    }
}
