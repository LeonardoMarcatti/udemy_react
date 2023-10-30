import {createSlice, configureStore} from '@reduxjs/toolkit'

const toggleSlice = createSlice({
  name: 'color',
  initialState: {status: false},
  reducers: {
    toggle(state) {state.status = !state.status}
  }
})

export const {toggle} = toggleSlice.actions

const store = configureStore({reducer: toggleSlice.reducer})


export default store