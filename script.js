let myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 695,
        read: false
    }
];

let titleInp = document.getElementById('title');
let authorInp = document.getElementById('author');
let pagesInp = document.getElementById('pages');
let readInp = document.getElementById('check');
const submit = document.querySelector('#submit');
const btnRead = document.querySelector('#read_btn');
const btnRemove = document.querySelector('#remove_btn');
const modal = document.querySelector('form');
const btnAdd = document.querySelector('.add-btn');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function openModal() {
    modal.classList.add('show');
};

function closeModal() {
    modal.classList.remove('show');
    modal.reset();
};

function displayBook() {

};

function addBookToLibrary(myLibrary) {
    let title = titleInp.value;
    let author = authorInp.value;
    let pages = pagesInp.value;
    let read = checkRead(readInp);

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
};

function checkRead(readInp) {
    let read = readInp.value;
    if (read === 'on') {
        return true;
    }
    else {
        return false;
    }
};

submit.addEventListener('click', () => {
    addBookToLibrary(myLibrary);
    closeModal();
    console.log(myLibrary);
});

btnAdd.addEventListener('click', () => {
    openModal();
})

