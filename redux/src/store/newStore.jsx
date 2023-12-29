import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import authSlice from './authslice'


const newStore = configureStore({reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}})

const {add, del, toggle} = counterSlice.actions
const {login, logout} = authSlice.actions

export {add, del, toggle, login, logout}
export default newStore