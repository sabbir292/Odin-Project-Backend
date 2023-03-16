let library = [
]

//Buttons
const addBook = document.querySelector('.addBtn')
const closeModalBtn = document.querySelector('.cross')
const submitBtn = document.querySelector('.submitBtn')

//**********************DOM************** */
const main = document.querySelector('.main')
const form = document.querySelector('form')
const bookList = document.querySelector('.booklist')
const modal = document.querySelector('.modal')

function createBook() {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isread = document.getElementById('isread').checked

  const newBook = new Book(title, author, pages, isread)
  library.push(newBook)

}



addBook.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)
submitBtn.addEventListener('click', setSubmit)



function showModal() {
  // console.log('showModal')
  modal.classList.add('show')
}
function closeModal() {
  // console.log('closeModal')
  modal.classList.remove('show')
}
function setSubmit(e) {
  console.log('submited')
  e.preventDefault()
  createBook()
  addBookToLibrary()
  form.reset()
}


function Book(title, author, pages, isread) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isread = isread

}


function addBookToLibrary() {
  const newBook = library.map(item => {
    return `<div class="book">
              <p class="title">${item.title}</p>
              <p class="author">written by ${item.author}.</p>
              <p class="pages">${item.pages} pages</p>
              <div class="bookBtns">
                  <button class="isreadBtn btn ${item.isread ? '' : 'notRead'}">${item.isread ? 'Read' : 'Not Read'}</button>
                  <button class="removeBtn btn">Remove</button>
              </div>
          </div>`
  })
  const newBookElement = newBook.join('')
  bookList.innerHTML = newBookElement

  const isread = document.querySelectorAll('.isreadBtn')
  const removeBook = document.querySelectorAll('.removeBtn')

  isread.forEach(item => {
    item.addEventListener('click', () => {
      // console.log('toggle')
      item.classList.toggle('notRead')
      if (item.classList.contains('notRead')) {
        item.textContent = 'Not Read'
        item.style.background = '#9e2f4b'
        item.style.color = 'white'
        this.isread = false
      } else {
        item.textContent = 'Read'
        item.style.background = '#b8f5c2'
        item.style.color = 'black'
        this.isread = true
      }
    })
  })

  removeBook.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.parentNode.parentNode.firstChild.nextSibling.textContent

      library = library.filter(book => title !== book.title);

      addBookToLibrary()
    })
  })

}



