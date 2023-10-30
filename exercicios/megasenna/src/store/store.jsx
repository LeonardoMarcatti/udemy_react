import {createSlice, configureStore} from '@reduxjs/toolkit'

const numbersSlice = createSlice({
  name: 'megasenna',
  initialState: {values: []},
  reducers: {
    pushNumber: (state, action) => state.values = action.payload
  }
})

export const {pushNumber} = numbersSlice.actions

const store = configureStore({reducer: numbersSlice.reducer})

export default  store