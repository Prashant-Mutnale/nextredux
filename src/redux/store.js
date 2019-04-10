import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducer'
import logger from 'redux-logger'

const initialstate = {};

const middleware = [thunk, logger]

// const makeStore = createStore(rootReducer, initialstate, applyMiddleware(...middleware));

// export default makeStore
export const makeStore = (initialState, options) => {
	console.log("initialState", initialState)
	return createStore(rootReducer, initialState, applyMiddleware(...middleware));
};