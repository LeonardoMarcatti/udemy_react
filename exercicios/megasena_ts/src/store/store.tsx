import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit'

interface Numbers {
  value: number[]
}

const initialState: Numbers = {value: []}

export const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    addNumbers: (state, action: PayloadAction<number[]>) => { state.value = (action.payload) }
  }
})

export const {addNumbers} = numbersSlice.actions

export const selectNumbers = (state: RootState) => state.numbers.value

export const store = configureStore({
  reducer: { numbers: numbersSlice.reducer }
})

export default numbersSlice.reducer

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch