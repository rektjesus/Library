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
const btnAdd = document.querySelector('.add-btn');
const modal = document.querySelector('.modal');


// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Opens new book pop up
function openModal() {
    modal.classList.add('show');
};

// Closes new book pop up
function closeModal() {
    document.querySelector('#title_error').classList.remove('show');
    document.querySelector('#author_error').classList.remove('show');
    document.querySelector('#pages_error').classList.remove('show');
    modal.classList.remove('show');
    titleInp.value = '';
    authorInp.value = '';
    pagesInp.value = '';
    readInp.checked = false;
};

// Displays new book on a new card 
function displayBook(book) {

    // Create card element in DOM
    let main = document.querySelector('.main');
    let card = document.createElement('div');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let span = document.createElement('span');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');

    card.className = 'card';
    h4.className = 'title';
    p1.className = 'author';
    p2.className = 'pages';
    btn1.setAttribute('type', 'button');
    btn2.setAttribute('type', 'button');
    btn1.setAttribute('id', 'read_btn');
    btn2.setAttribute('id', 'remove_btn');
    btn1.textContent = 'Read';
    btn2.textContent = 'Remove';

    main.appendChild(card);
    card.appendChild(h4);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(span);
    span.appendChild(btn1);
    span.appendChild(btn2);

    // Apply input values to card
    h4.textContent = book.title;
    p1.textContent = book.author;
    p2.textContent = book.pages;

    // Change card color if read/unread
    if (book.read === true) {
        card.classList.add('read');
    }
};

function isInLibrary(newBook, library) {

};

function validateForm() {
    let titleErr = document.querySelector('#title_error');
    let authorErr = document.querySelector('#author_error');
    let pagesErr = document.querySelector('#pages_error')
    if (titleInp.value === '' && !titleErr.classList.contains('show')) titleErr.classList.add('show');
    if (authorInp.value === '' && !authorErr.classList.contains('show')) authorErr.classList.add('show');
    if (pagesInp.value === '' && !pagesErr.classList.contains('show')) pagesErr.classList.add('show');

    if (titleInp.value === '' || pagesInp.value === '' || authorInp.value === '') {
        return false;
    }
    else {
        return true;
    }
}

function addBookToLibrary(myLibrary) {
    let title = titleInp.value;
    let author = authorInp.value;
    let pages = pagesInp.value;
    let read = readInp.checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

submit.addEventListener('click', () => {
    if (validateForm() === false) return;
    addBookToLibrary(myLibrary);
    displayBook(myLibrary.slice(-1).pop());
    closeModal();
    console.log(myLibrary);
});

btnAdd.addEventListener('click', () => {
    openModal();
})

