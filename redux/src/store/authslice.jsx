import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
   name: 'authentication',
   initialState: {isAuthenticated: false, email: null, password: null},
   reducers: {
      login(state, action) {
         state.isAuthenticated = true; 
         state.email = action.payload.email
         state.password = action.payload.password
      },
      logout(state) {
         state.isAuthenticated = false
         state.email = null
         state.password = null
      }
   }
})

export default authSlice