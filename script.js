let myLibrary = [];

let titleInp = document.getElementById('title');
let authorInp = document.getElementById('author');
let pagesInp = document.getElementById('pages');
let readInp = document.getElementById('check');
const submit = document.querySelector('#submit');
const btnRead = document.querySelector('#read_btn');
const btnRemove = document.querySelector('#remove_btn');
const btnAdd = document.querySelector('.add-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#close_modal');


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
    document.querySelector('#book_error').classList.remove('show');
    modal.classList.remove('show');
    titleInp.value = '';
    authorInp.value = '';
    pagesInp.value = '';
    readInp.checked = false;
};

// Check if the input fields are empty
function validateForm() {
    let titleErr = document.querySelector('#title_error');
    let authorErr = document.querySelector('#author_error');
    let pagesErr = document.querySelector('#pages_error');
    let bookErr = document.querySelector('#book_error');
    let found;
    if (titleInp.value === '' && !titleErr.classList.contains('show')) titleErr.classList.add('show');
    if (authorInp.value === '' && !authorErr.classList.contains('show')) authorErr.classList.add('show');
    if (pagesInp.value === '' && !pagesErr.classList.contains('show')) pagesErr.classList.add('show');

    // Check if the book is already in library
    myLibrary.some((el) => {
        if (el.title === titleInp.value && el.author === authorInp.value) {
            bookErr.classList.add('show');
            return found = true;
        }
    });

    if (titleInp.value === '' || pagesInp.value === '' || authorInp.value === '' || found === true) {
        return false;
    }
    else {
        return true;
    }
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
    let readBtn = document.createElement('button');
    let removeBtn = document.createElement('button');

    card.className = 'card';
    card.setAttribute('data-number', myLibrary.length);
    h4.className = 'title';
    p1.className = 'author';
    p2.className = 'pages';
    readBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('type', 'button');
    readBtn.setAttribute('id', 'read_btn');
    removeBtn.setAttribute('id', 'remove_btn');
    readBtn.textContent = 'Read';
    removeBtn.textContent = 'Remove';
    readBtn.setAttribute('data-number', myLibrary.length)
    removeBtn.setAttribute('data-number', myLibrary.length)

    main.appendChild(card);
    card.appendChild(h4);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(span);
    span.appendChild(readBtn);
    span.appendChild(removeBtn);

    // Apply input values to card
    h4.textContent = book.title;
    p1.textContent = book.author;
    p2.textContent = book.pages;

    // Assign remove button to remove the card it is located in
    removeBtn.addEventListener('click', () => {
        removeBook(removeBtn.getAttribute('data-number'));
    });

    // Assign read button to change read state of card
    readBtn.addEventListener('click', () => {
        readBook(readBtn.getAttribute('data-number'));
    });

    // Change card color if read/unread
    if (book.read === true) {
        card.classList.add('read');
    }
};

// Removes the book from the page
function removeBook(index) {
    let book = document.querySelector(`.card[data-number='${index}']`);
    book.remove();
    myLibrary.splice(myLibrary.length - 1, 1);
};

// Changes the books read/unread status
function readBook(index) {
    let book = document.querySelector(`.card[data-number='${index}']`);
    if (book.classList.contains('read')) {
        book.classList.remove('read');
    }
    else {
        book.classList.add('read');
    }
}

// Adds book to the library array
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
});

closeModalBtn.addEventListener('click', () => {
    closeModal();
});

