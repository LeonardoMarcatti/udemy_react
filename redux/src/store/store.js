import {legacy_createStore as createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const storeReducer = (state = {value: 0, show: true}, action) => {
  const {type, amount} = action

  switch (type) {
    case '+':
      return {...state, value: state.value + 1}
    case '-':
      return {...state, value: state.value - 1}
    case 'show':
      return {...state, show: !state.show}
    case 'add':
      return {...state, value: state.value + amount}
    case 'del':
      return {...state, value: state.value - amount}
    default:
      return state
  }
}

// const store = createStore(storeReducer)

/**
 * * Existe uma segunda forma de fazer
 */

const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0, show: true},
  reducers: {
    increase(state){state.value++}, 
    decrease(state){state.value--},
    toggleShow(state){state.show = !state.show},
    add(state, action){state.value += action.payload},
    del(state, action){state.value -= action.payload},
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {isLogged: false},
  reducers: {
    toggleLog(state){state.isLogged = !state.isLogged}
  }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({reducer: {count: counterSlice.reducer, auth: authSlice.reducer}})

export default store;