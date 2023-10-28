import {configureStore, createSlice} from '@reduxjs/toolkit'

interface modeState {
   pageMode: boolean
}

const initialState: modeState = {pageMode: false}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggle: state => {
       state.pageMode = !state.pageMode
      }
  }
})

export const {toggle} = modeSlice.actions

export const selectMode = (state: RootState) => state.mode.pageMode

export const store = configureStore({
   reducer: { mode: modeSlice.reducer }
})


export default modeSlice.reducer

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch