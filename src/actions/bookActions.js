const addBook = (data) => {
  return {
    type: 'ADD_BOOK',
    payload: data
  }
}

const editBook = (data) => {
  return {
    type: 'EDIT_BOOK',
    payload: data
  }
}

const borrowBook = (data) => {
  return {
    type: 'BORROW_BOOK',
    payload: data
  }
}

const returnBook = (data) => {
  return {
    type: 'RETURN_BOOK',
    payload: data
  }
}

export { addBook, editBook, borrowBook, returnBook }