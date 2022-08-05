const myLibrary = [];
const container = document.querySelector('.container');

class Book {
  constructor(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
  }
  info() {
    info = `${this.title} by ${this.author}, ${this.pages}, ${this.completed}`;
    console.log(info);
    return info;
  }
}
// Create DOM element and populate it with book data
function createBookEntry(book) {
  const div = document.createElement('div')
  div.dataset.index = myLibrary.indexOf(book)
  htmlString = '<b>' + book.title + '</b>' + '<br>' + book.author + '<br>' + book.pages + 
  ' pages' + '<br>' + book.completed + '<br>'
  div.innerHTML = htmlString
  container.appendChild(div)

  const removeButton = document.createElement('button')
  removeButton.innerHTML = 'Remove'
  removeButton.onclick = () => {
    myLibrary.splice(div.dataset.indexNumber, 1)
    div.remove()
  }
  div.appendChild(removeButton)
  
  const changeReadStatusButton = document.createElement('button')
  changeReadStatusButton.innerHTML = 'Change Read Status'
  changeReadStatusButton.onclick = () => {
    if (book.completed === 'Completed') {
      book.completed = 'Not Completed'
      div.innerHTML = '<b>' + book.title + '</b>' + '<br>' + book.author + '<br>' + book.pages + 
      ' pages' + '<br>' + book.completed + '<br>'
      div.appendChild(removeButton)
      div.appendChild(changeReadStatusButton)
    } else {
      book.completed = 'Completed'
      div.innerHTML = '<b>' + book.title + '</b>' + '<br>' + book.author + '<br>' + book.pages + 
      ' pages' + '<br>' + book.completed + '<br>'
      div.appendChild(removeButton)
      div.appendChild(changeReadStatusButton)
    }
  }
  div.appendChild(changeReadStatusButton)
}
function addBookToLibrary(newBook) {
  myLibrary.push(newBook)
  createBookEntry(newBook)
}

addBookToLibrary(new Book('Bag of Bones', 'Stephen King', 449, 'Completed'))
addBookToLibrary(new Book('The Gunslinger', 'Stephen King', 569, 'Completed'))


const showNewBookForm = () => document.querySelector('.new-book').style.display = 'block'

function newBookSubmitter() {
  let newTitle = document.querySelector('#title').value
  let newAuthor = document.querySelector('#author').value
  let newPages = document.querySelector('#pages').value
  let newCompleted = ''
  if (document.getElementById('completed').checked) {
    newCompleted = 'Completed'
  } else {
    newCompleted = 'Not Completed'
  }
  if (newTitle === '' && newAuthor === '' && newPages === '' && newCompleted === '') {
    return alert('Fill out all of the fields')
  } else {
    addBookToLibrary(new Book(newTitle, newAuthor, newPages, newCompleted))
    let form = document.querySelector('.new-book')
    form.reset()
    form.style.display = 'none'
  }
}