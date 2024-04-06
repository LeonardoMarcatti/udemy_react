import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counter',
   initialState: {counter: 0, show: true},
   reducers: {
      add(state, action) {state.counter += Number(action.payload)},
      del(state, action) {state.counter -= Number(action.payload)},
      toggle(state) { state.show = !state.show},
   }
})

export default counterSlice