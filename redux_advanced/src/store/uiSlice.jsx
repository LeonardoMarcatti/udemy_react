import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
   name: 'ui',
   initialState: {show: false, notification: null},
   reducers: {
      toggle(state){state.show = !state.show},
      showNotification(state, action){
         state.notification = {status: action.payload.status, title: action.payload.title, messsage: action.payload.messsage}
      }
   }
})

export default uiSlice