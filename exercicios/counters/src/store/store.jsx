import { createSlice, configureStore } from '@reduxjs/toolkit'

const valueSlice = createSlice({
  name: 'value',
  initialState: {value: 0},
  reducers: {
    add: (state) => {state.value++},
    del: (state) => {state.value--},
    amountAdd: (state, action) => {state.value = state.value + action.payload},
    amountDel: (state, action) => {state.value = state.value - action.payload}
  }
})

export const {add, del, amountAdd, amountDel} = valueSlice.actions

const store = configureStore({reducer: valueSlice.reducer})
export default store