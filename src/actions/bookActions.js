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

export { addBook, removeBook }