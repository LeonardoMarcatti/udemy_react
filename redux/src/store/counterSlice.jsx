import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counter',
   initialState: {counter: 0, show: true},
   reducers: {
      add(state, action) {state.counter = state.counter + action.payload},
      del(state, action) {state.counter = state.counter - action.payload},
      toggle(state) { state.show = !state.show},
   }
})

export default counterSlice