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
      borrowedBooks: [1,8,76,2],
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
        users: state.users.filter(user => user.id !== action.payload)
      }
    case 'EDIT_USER':
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
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
    case 'BORROW_BOOK':
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.payload.bookId) {
            book.quantity--;
            return book
          } else {
            return book
          }
        }),
        users: state.users.map(user => {
          if (user.keycardNumber === action.payload.keycardNumber) {
            user.borrowedBooks.push(action.payload.bookId);
            return user
          } else {
            return user
          }
        })
      }
    default:
      return state
  }
}

export default masterReducer
