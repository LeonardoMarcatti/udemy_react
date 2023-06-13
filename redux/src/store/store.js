import {legacy_createStore as createStore} from 'redux'

const storeReducer = (state = {value: 0, show: true}, action) => {
  const {type, amount} = action

  switch (type) {
    case '+':
      return {value: state.value + 1, show: state.show}
    case '-':
      return {value: state.value - 1, show: state.show}
    case 'show':
      return {value: state.value, show: !state.show}
    case 'add':
      return {value: state.value + amount, show: state.show}
    case 'del':
      return {value: state.value - amount, show: state.show}
    default:
      return state
  }
}

const store = createStore(storeReducer)

export default store;