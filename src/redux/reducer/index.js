import { combineReducers } from 'redux'
import postReducer from './Postreducer';

export default combineReducers({
	posts: postReducer
})