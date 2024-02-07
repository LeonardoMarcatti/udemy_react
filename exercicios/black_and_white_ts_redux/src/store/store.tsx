import {configureStore} from '@reduxjs/toolkit'
import modeSlice from './modeSlice'


export const {toggle} = modeSlice.actions

// export const selectMode = (state: RootState) => state.mode.pageMode

const store = configureStore({reducer: modeSlice.reducer })
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch