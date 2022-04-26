const addUser = (data) => {
  return {
    type: 'ADD_USER',
    payload: data
  }
}

const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    payload: id
  }
}

const editUser = (data) => {
  return {
    type: 'EDIT_USER',
    payload: data
  }
}

const setLoggedInUser = (data) => {
  return {
    type: 'SET_LOGGED_IN_USER',
    payload: data
  }
}

export { addUser, removeUser, editUser, setLoggedInUser }