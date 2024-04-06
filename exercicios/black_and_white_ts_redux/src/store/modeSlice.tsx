import {createSlice} from '@reduxjs/toolkit'

interface modeState {
   pageMode: boolean
}

const initialState: modeState = {pageMode: false}

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggle: state => {
       state.pageMode = !state.pageMode
      }
  }
})

export default modeSlice