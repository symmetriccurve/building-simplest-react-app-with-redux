import { combineReducers } from 'redux'
import bankReducer from './bankReducer'
//import customersReducer from './customersReducer'
//Any number of reducers here

const rootReducer = combineReducers({
  bankReducer: bankReducer
})

export default rootReducer
