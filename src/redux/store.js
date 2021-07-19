import { combineReducers, createStore } from "redux";
// import rootReducer from "../redux/reducers/index";
import ArticlesRedux from './reducers/index'

// createStore toma un reductor como primer argumento y en 
// nuestro caso pasamos rootReducer.
const store = createStore(combineReducers({
    articles: ArticlesRedux,
}));

export default store;