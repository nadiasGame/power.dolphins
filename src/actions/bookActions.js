const addBook = (data) => {
  return {
    type: 'ADD_BOOK',
    payload: data
  }
}

const removeBook = (id) => {
  return {
    type: 'REMOVE_BOOK',
    payload: id
  }
}

const editBook = (data) => {
  return {
    type: 'EDIT_BOOK',
    payload: data
  }
}

export { addBook, removeBook, editBook }