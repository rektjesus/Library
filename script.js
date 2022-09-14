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
    modal.classList.remove('show');
    modal.reset();
};

// Displays new book on a new card 
function displayBook(book) {
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

    h4.textContent = book.title;
    p1.textContent = book.author;
    p2.textContent = book.pages;
};

function addBookToLibrary(myLibrary) {
    let title = titleInp.value;
    let author = authorInp.value;
    let pages = pagesInp.value;
    let read = checkRead(readInp);

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    closeModal();
    displayBook(newBook);
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
    console.log(myLibrary);
});

btnAdd.addEventListener('click', () => {
    openModal();
})

