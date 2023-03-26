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

// let library = [
//   {
//     title:"A Better India: A Better World",
//     author:'Narayana Murthy',
//     pages:459,
//     isread:false
// },
//   {
//     title:"A Passage to India",
//     author:'E.M. Foster',
//     pages:999,
//     isread:false
// },
//   {
//     title:"A Revenue Stamp",
//     author:'Amrita Pritam',
//     pages:989,
//     isread:false
// },
// ]

// function Book(title,author,pages,isread) {
//   // the constructor...
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.isread = isread
// }


// function addBookToLibrary(title,author,pages,isread) {
//   // do stuff here
//   const newBook = new Book(title,author,pages,isread)
//   library.push(newBook)
// }

// // UI-

// const addBook = document.querySelector('.addBtn')
// const closeModalBtn = document.querySelector('.cross')
// const submitBtn = document.querySelector('.submitBtn')
// const modal = document.querySelector('.modal')
// const form = document.querySelector('form')
// const bookList = document.querySelector('.booklist')


// // -----

// function showModal() {
//   // console.log('showModal')
//   modal.classList.add('show')
// }
// function closeModal() {
//   // console.log('closeModal')
//   modal.classList.remove('show')
// }

// // ----

// addBook.addEventListener('click', showModal)
// closeModalBtn.addEventListener('click', closeModal)
// submitBtn.addEventListener('click', HandleSubmit)


// function HandleSubmit(e){
//   e.preventDefault()
//   const title = document.getElementById('title').value
//   const author = document.getElementById('author').value
//   const pages = document.getElementById('pages').value
//   const isread = document.getElementById('isread').checked
  
//   addBookToLibrary(title,author,pages,isread)
//   form.reset()
//   showBooks()

//   // console.log(library)
//   // console.log(title,author,pages,isread)
//   console.log(library)
// }


// function showBooks(){
//     const newBook = library.map(item => {
//     return `<div class="book">
//               <p class="title">${item.title}</p>
//               <p class="author">Author: ${item.author}</p>
//               <p class="pages">Pages: ${item.pages}</p>
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

//   isread.forEach((item, index) => {

//     item.addEventListener('click', () => {
//        console.log(library)
//       item.classList.toggle('notRead')
//       if (item.classList.contains('notRead')) {
//         item.textContent = 'Not Read'
//         item.style.background = '#9e2f4b'
//         item.style.color = 'white'
//         library[index].isread = false
//       } else {
//         item.textContent = 'Read'
//         item.style.background = '#b8f5c2'
//         item.style.color = 'black'
//         library[index].isread = true
//       }
//     })
//   })

//   removeBook.forEach((item, index) => {
//     item.addEventListener('click', () => {
//       const title = item.parentNode.parentNode.querySelector('.title').textContent;
//       library = library.filter((book) => book.title !== title);
//       showBooks();
//     });
//   });


// }



// Class based Libraray Project: 
// let library = [
//   {
//     _title:"A Better India: A Better World",
//     _author:'Narayana Murthy',
//     _pages:459,
//     _isread:false
// },
//   {
//     _title:"A Passage to India",
//     _author:'E.M. Foster',
//     _pages:999,
//     _isread:true
// },
//   {
//     _title:"A Revenue Stamp",
//     _author:'Amrita Pritam',
//     _pages:989,
//     _isread:false
// },
// ]

// class Books{
//   constructor(title,author,pages,isread){
//     this._title = title
//     this._author = author
//     this._pages = pages
//     this._isread = isread
//   }

// }

// // const book1 = new Books("Game of Thrones", "Jonh Doe", "2323",true)
// // book1.show

// (()=>{
//     const addBook = document.querySelector('.addBtn')
//     const closeModalBtn = document.querySelector('.cross')
//     const submitBtn = document.querySelector('.submitBtn')
//     const modal = document.querySelector('.modal')
//     const form = document.querySelector('form')
//     const bookList = document.querySelector('.booklist')


//     const showModal = ()=>{
//       modal.classList.add('show')
//     }
//     const closeModal = ()=>{
//       modal.classList.remove('show')
//     }
//     const handleSubmit = (e)=>{
//       e.preventDefault()
//         const title = document.getElementById('title').value
//         const author = document.getElementById('author').value
//         const pages = document.getElementById('pages').value
//         const isRead = document.getElementById('isread').checked

//         if(!title) throw new Error('Plase enter a name')
//         if(!author) throw new Error('Plase enter author name')
//         if(!pages) throw new Error('Plase enter the page number')

//         const newBook = new Books(title,author,pages,isRead)
//         const copy = library.some(item=> item._title === newBook._title&& item._author === newBook_author)

//         if(copy) throw new Error('this book already exists')
//         else library.push(newBook)
//         console.log(library)
//         form.reset()
       

//         const book = library.map(book=>{
//           return`<div class="book">
//                           <p class="title">${book._title}</p>
//                           <p class="author">${book._author}</p>
//                           <p class="pages">${book._pages}</p>
//                           <div class="bookBtns">
//                               <button class='isreadBtn btn ${book._isread? '': 'notRead'}'>Read</button>
//                               <button class="removeBtn btn">Remove</button>
//                           </div>
//                       </div>`

//                     })
          
//           const Book = book.join('')
//           bookList.innerHTML = Book

//           const isReadBtn = document.querySelectorAll('.isreadBtn')
//           const remove = document.querySelectorAll('.removeBtn')
          
//           isReadBtn.forEach(btn=>{
//             btn.addEventListener('click', ()=>{
//               btn.classList.toggle('notRead')
//               if(btn.classList.contains('notRead')) btn.textContent = "Not Read"
//               else btn.textContent = "Read"
//             })
//           })

//           remove.forEach(btn =>{
//             btn.addEventListener('click',()=>{
//               const Title = btn.parentNode.parentNode.firstChild.nextSibling.textContent
//               const newLibrary = library.filter(book => Title!==book._title)
//               console.log(newLibrary)
//             })
//           })

//     }

  
      

//     //UI
//     addBook.addEventListener('click', showModal)
//     closeModalBtn.addEventListener('click', closeModal)
//     submitBtn.addEventListener('click', handleSubmit)
//     //  Form UI

    
    



// })()

//generated by IIII-------------

// class Library {
//   constructor() {
//     this.library = [];
//     this.addBookBtn = document.querySelector('.addBtn');
//     this.closeModalBtn = document.querySelector('.cross');
//     this.submitBtn = document.querySelector('.submitBtn');
//     this.modal = document.querySelector('.modal');
//     this.form = document.querySelector('form');
//     this.bookList = document.querySelector('.booklist');

//     this.addBookBtn.addEventListener('click', () => this.showModal());
//     this.closeModalBtn.addEventListener('click', () => this.closeModal());
//     this.submitBtn.addEventListener('click', (e) => this.handleSubmit(e));
//   }

//   showModal() {
//     this.modal.classList.add('show');
//   }

//   closeModal() {
//     this.modal.classList.remove('show');
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const pages = document.getElementById('pages').value;
//     const isRead = document.getElementById('isread').checked;

//     if (!title) throw new Error('Please enter a name');
//     if (!author) throw new Error('Please enter author name');
//     if (!pages) throw new Error('Please enter the page number');

//     const newBook = new Book(title, author, pages, isRead);
//     const copy = this.library.some((item) => item.title === newBook.title && item.author === newBook.author);

//     if (copy) throw new Error('This book already exists');
//     else this.library.push(newBook);

//     this.renderBookList();
//     this.form.reset();
//   }

//   renderBookList() {
//     let bookListHtml = '';

//     this.library.forEach((book) => {
//       bookListHtml += `
//         <div class="book">
//           <p class="title">${book.title}</p>
//           <p class="author">${book.author}</p>
//           <p class="pages">${book.pages}</p>
//           <div class="bookBtns">
//             <button class='isreadBtn btn ${book.isRead ? '' : 'notRead'}'>${book.isRead ? 'Read' : 'Not Read'}</button>
//             <button class="removeBtn btn">Remove</button>
//           </div>
//         </div>
//       `;
//     });

//     this.bookList.innerHTML = bookListHtml;

//     const isReadBtns = document.querySelectorAll('.isreadBtn');
//     isReadBtns.forEach((btn) => {
//       btn.addEventListener('click', () => {
//         btn.classList.toggle('notRead');
//         btn.textContent = btn.classList.contains('notRead') ? 'Not Read' : 'Read';
//       });
//     });

//     const removeBtns = document.querySelectorAll('.removeBtn');
//     removeBtns.forEach((btn) => {
//       btn.addEventListener('click', () => {
//         const title = btn.parentNode.parentNode.querySelector('.title').textContent;
//         this.library = this.library.filter((book) => book.title !== title);
//         this.renderBookList();
//       });
//     });
//   }
// }

// class Book {
//   constructor(title, author, pages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
//   }
// }

// new Library();


class Books{
  constructor(title,author,pages,isread){
    this.title = title
    this.author = author
    this.pages = pages
    this.isread = isread
  }
}

class Libraray{
  constructor(){
    this.libraray = []

    this.modal = document.querySelector('.modal')
    this.addBookBtn = document.querySelector('.addBtn')
    this.closeModalBtn = document.querySelector('.cross')
    this.submitBtn = document.querySelector('.submitBtn')
    this.bookList = document.querySelector('.booklist')
    this.form = document.querySelector('form')

    this.addBookBtn.addEventListener('click', () => this.showModal())
    this.closeModalBtn.addEventListener('click', ()=> this.closeModal())
    this.submitBtn.addEventListener('click', (e)=> this.handleSubmit(e))

  }

  showModal() {
    this.modal.classList.add('show');
  }
  closeModal(){
    this.modal.classList.remove('show')
  }

  handleSubmit(e){
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const checkBox = document.getElementById('isread').checked
    console.log(checkBox)


    if (!title) throw new Error('Please enter a name');
    if (!author) throw new Error('Please enter author name');
    if (!pages) throw new Error('Please enter the page number');

    const newBook = new Books(title,author,pages,checkBox)
    const copies = this.libraray.some(book=> book.title === newBook.title && book.author === newBook.author)
    if(copies) throw new Error('This book already Exist')
    else this.libraray.push(newBook)
    this.renderBookLIst()
    this.form.reset()
  }

  renderBookLIst(){
    console.log(this.libraray)
    let newBookHtml =''
    this.libraray.forEach(book=>{
      newBookHtml+= `<div class="book">
                      <p class="title">${book.title}</p>
                      <p class="author">${book.author}</p>
                      <p class="pages">${book.pages}</p>
                        <div class="bookBtns">
                          <button class='isreadBtn btn ${book.isread? '' : 'notRead'}'>${book.isread? 'Read' : 'Not Read'}</button>
                        <button class="removeBtn btn">Remove</button>
                      </div>
                    </div>`
    })
    this.bookList.innerHTML = newBookHtml

    const isreadBtn = document.querySelectorAll('.isreadBtn')
    const removeBtn = document.querySelectorAll('.removeBtn')

    isreadBtn.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        btn.classList.toggle('notRead')
        if(btn.classList.contains('notRead')) 
        {
          btn.textContent = 'Not Read'
          // btn.style.background = 'rgb(165, 240, 165)'
      }
        else {
          btn.textContent = 'Read'
          // btn.style.background = '#9e2f4b'
        }
        
      })
    })

    removeBtn.forEach(btn=>{

      btn.addEventListener('click',(e)=> {
        const Title = e.target.parentNode.parentNode.firstChild.nextSibling.textContent
        this.libraray = this.libraray.filter(book => book.title !== Title)
        this.renderBookLIst()
      })

    })

  }
    
  }


new Libraray()