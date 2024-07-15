// src/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import rootReducer from './reducers'; 
// import { createStoreHook } from 'react-redux';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
