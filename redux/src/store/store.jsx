import {legacy_createStore as createStore} from 'redux'

const counterReducer = (state = {counter: 0, show: true}, action) => {
   const {type, amount} = action

   switch (type) {
      case 'add':
         return {...state, counter: state.counter + Number(amount)}
      
      case 'del':
         return {...state, counter: state.counter - Number(amount)}

      case 'show':
         return {...state, show: !state.show}

      default:
         return state
   }
}

const store = createStore(counterReducer)

export default store