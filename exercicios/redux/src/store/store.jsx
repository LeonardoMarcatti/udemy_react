import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    increase(state){state.value++},
    decrease(state){state.value--},
    add(state, action){state.value += action.payload},
    del(state, action){state.value -= action.payload}
  }
})

const showSlice = createSlice({
  name: 'toggle',
  initialState: {show: true},
  reducers: {
    toggleShow(state){state.show = !state.show}
  }
})

export const counterActions = counterSlice.actions;
export const showActions = showSlice.actions;

const store = configureStore({reducer: {count: counterSlice.reducer, show: showSlice.reducer}})
export default store;