import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(applyMiddleware(thunk)) 
    )

export default Store;