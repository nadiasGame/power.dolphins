import booksJson from '../Books.json'

const initialState = {
  users: [
    {
      name: 'Admin adminsson',
      email: 'admin@admin.se',
      password: 'admin',
      admin: true,
      keycardNumber: '1234567890',
      cardPIN: '3758',
      borrowedBooks: [],
    },
    {
      name: 'User usersson',
      email: 'user@user.se',
      password: 'user',
      admin: false,
      keycardNumber: '0987654321',
      cardPIN: '8147',
      borrowedBooks: [{bookId: 1, dueDate: "2022-05-28T12:40:40.130Z"},{bookId: 8, dueDate: "2022-05-28T12:40:40.130Z"},{bookId: 2, dueDate: "2022-05-28T12:40:40.130Z"}],
    }
  ],
  loggedInUser: null,

  books: booksJson
}

const masterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.email !== action.payload)
      }
    case 'EDIT_USER':
      return {
        ...state,
        users: state.users.map(user => {
          if (user.email === action.payload.email) {
            return action.payload
          } else {
            return user
          }
        })
      }
    case 'SET_LOGGED_IN_USER':
      return {
        ...state,
        loggedInUser: action.payload
      }

    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload]
      }
    case 'EDIT_BOOK':
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.payload.id) {
            return action.payload
          } else {
            return book
          }
        })
      }
    case 'BORROW_RETURN_BOOK':
      //find user in users by action.payload.keycardNumber,
      //find book in books by action.payload.bookId
      //if user.borrowedBooks.includes(action.payload.bookId)
      // remove book from user.borrowedBooks
      // ++ book.quantity in books
      //else
      //  add book to user.borrowedBooks
      // -- book.quantity in books
      var currentDate=new Date();
      currentDate.setDate(currentDate.getDate()+ 30);

      var date = new Date(); // Now
      date.setDate(date.getDate() + 30); // Set now + 30 days as the new date
      
      let userHasBorrowedBookAlready = state.users.find(user => user.keycardNumber === action.payload.keycardNumber).borrowedBooks.includes(Number(action.payload.bookId))
      return {
        ...state,
        users: state.users.map(user => {
          if (user.keycardNumber === action.payload.keycardNumber) {
            if(user.cardPIN === action.payload.cardPIN){
              if (userHasBorrowedBookAlready) {
                return {
                  ...user,
                  borrowedBooks: user.borrowedBooks.filter(bookId => bookId !== Number(action.payload.bookId))
                }
              } else {
                return {
                  ...user,
                  borrowedBooks: [...user.borrowedBooks, {bookId: Number(action.payload.bookId), dueDate: date}]
                }
              }
            } else {
              return user
            }
          } else {
            return user
          }
        }),
        books: state.books.map(book => {
          if (book.id === action.payload.bookId) {
            if (userHasBorrowedBookAlready) {
              return {
                ...book,
                quantity: book.quantity + 1
              }
            } else {
              return {
                ...book,
                quantity: book.quantity - 1
              }
            }
          } else {
            return book
          }
        })
      }
    default:
      return state
  }
}

export default masterReducer
