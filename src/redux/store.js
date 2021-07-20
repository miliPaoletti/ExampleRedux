import { combineReducers, createStore } from "redux";
// import rootReducer from "../redux/reducers/index";
import ArticlesRedux from './reducers/index'
import { composeWithDevTools } from "redux-devtools-extension";

// createStore toma un reductor como primer argumento y en 
// nuestro caso pasamos ArticlesRedux. 
// Cree el combine Reducers, porque la idea es pasar varios.
// returns a function that calls each reducer whenever an action is dispatched.
const store = createStore(combineReducers({
    articles: ArticlesRedux,
}),     
    composeWithDevTools()
);

export default store;