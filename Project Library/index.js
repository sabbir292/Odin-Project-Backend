// let library = [
// ]
// console.log(library)
// //Buttons
// const addBook = document.querySelector('.addBtn')
// const closeModalBtn = document.querySelector('.cross')
// const submitBtn = document.querySelector('.submitBtn')

// //**********************DOM************** */
// const main = document.querySelector('.main')
// const form = document.querySelector('form')
// const bookList = document.querySelector('.booklist')
// const modal = document.querySelector('.modal')

// function createBook() {
//   const title = document.getElementById('title').value
//   const author = document.getElementById('author').value
//   const pages = document.getElementById('pages').value
//   const isread = document.getElementById('isread').checked

//   const newBook = new Book(title, author, pages, isread)
//   library.push(newBook)

// }



// addBook.addEventListener('click', showModal)
// closeModalBtn.addEventListener('click', closeModal)
// submitBtn.addEventListener('click', setSubmit)



// function showModal() {
//   // console.log('showModal')
//   modal.classList.add('show')
// }
// function closeModal() {
//   // console.log('closeModal')
//   modal.classList.remove('show')
// }
// function setSubmit(e) {
//   console.log('submited')
//   e.preventDefault()
//   createBook()
//   addBookToLibrary()
//   form.reset()
// }


// function Book(title, author, pages, isread) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.isread = isread

// }


// function addBookToLibrary() {
//   const newBook = library.map(item => {
//     return `<div class="book">
//               <p class="title">${item.title}</p>
//               <p class="author">written by ${item.author}.</p>
//               <p class="pages">${item.pages} pages</p>
//               <div class="bookBtns">
//                   <button class="isreadBtn btn ${item.isread ? '' : 'notRead'}">${item.isread ? 'Read' : 'Not Read'}</button>
//                   <button class="removeBtn btn">Remove</button>
//               </div>
//           </div>`
//   })
//   const newBookElement = newBook.join('')
//   bookList.innerHTML = newBookElement

//   const isread = document.querySelectorAll('.isreadBtn')
//   const removeBook = document.querySelectorAll('.removeBtn')

//   isread.forEach(item => {
//     item.addEventListener('click', () => {
//       console.log(library)
//       // console.log('toggle')
//       item.prototype = Object.create(Book.prototype)
//       item.classList.toggle('notRead')
//       if (item.classList.contains('notRead')) {
//         item.textContent = 'Not Read'
//         item.style.background = '#9e2f4b'
//         item.style.color = 'white'
//         item.isread = false
//       } else {
//         item.textContent = 'Read'
//         item.style.background = '#b8f5c2'
//         item.style.color = 'black'
//         item.isread = true
//       }
//     })
    
//   })

//   removeBook.forEach(item => {
//     item.addEventListener('click', () => {
//       const title = item.parentNode.parentNode.firstChild.nextSibling.textContent

//       library = library.filter(book => title !== book.title);

//       addBookToLibrary()
//     })
//   })


// }

// **********************************************************

let library = [
  {
    title:"A Better India: A Better World",
    author:'Narayana Murthy',
    pages:459,
    isread:false
},
  {
    title:"A Passage to India",
    author:'E.M. Foster',
    pages:999,
    isread:false
},
  {
    title:"A Revenue Stamp",
    author:'Amrita Pritam',
    pages:989,
    isread:false
},
]

function Book(title,author,pages,isread) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.isread = isread
}


function addBookToLibrary(title,author,pages,isread) {
  // do stuff here
  const newBook = new Book(title,author,pages,isread)
  library.push(newBook)
}

// UI-

const addBook = document.querySelector('.addBtn')
const closeModalBtn = document.querySelector('.cross')
const submitBtn = document.querySelector('.submitBtn')
const modal = document.querySelector('.modal')
const form = document.querySelector('form')
const bookList = document.querySelector('.booklist')


// -----

function showModal() {
  // console.log('showModal')
  modal.classList.add('show')
}
function closeModal() {
  // console.log('closeModal')
  modal.classList.remove('show')
}

// ----

addBook.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)
submitBtn.addEventListener('click', HandleSubmit)


function HandleSubmit(e){
  e.preventDefault()
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isread = document.getElementById('isread').checked
  
  addBookToLibrary(title,author,pages,isread)
  form.reset()
  showBooks()

  // console.log(library)
  // console.log(title,author,pages,isread)
  console.log(library)
}


function showBooks(){
    const newBook = library.map(item => {
    return `<div class="book">
              <p class="title">${item.title}</p>
              <p class="author">Author: ${item.author}</p>
              <p class="pages">Pages: ${item.pages}</p>
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

  isread.forEach((item, index) => {

    item.addEventListener('click', () => {
       console.log(library)
      item.classList.toggle('notRead')
      if (item.classList.contains('notRead')) {
        item.textContent = 'Not Read'
        item.style.background = '#9e2f4b'
        item.style.color = 'white'
        library[index].isread = false
      } else {
        item.textContent = 'Read'
        item.style.background = '#b8f5c2'
        item.style.color = 'black'
        library[index].isread = true
      }
    })
  })

  removeBook.forEach((item, index) => {
    item.addEventListener('click', () => {
      const title = item.parentNode.parentNode.querySelector('.title').textContent;
      library = library.filter((book) => book.title !== title);
      showBooks();
    });
  });


}