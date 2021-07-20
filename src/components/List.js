import React from "react";

import {getListArticles} from '../redux/selectors/index' 

import { connect } from "react-redux";


// dibuja una lista con los datos que tenga el arreglo de articles. 
// los datos los agarra de redux, a traves del getListArticles
class ConnectedList extends React.Component{
    render(){
        let articlesList = this.props.reduxData.articles.articles.map((item) => {
            return(
            <li key={item.id}>{item.title}</li>)
        })
        return (<ul>{articlesList}</ul>)
    }
}

let List = connect((state) => ({reduxData: getListArticles(state)}), {})(ConnectedList);
// https://stackoverflow.com/questions/57467903/whats-the-name-type-of-redux-function-connectmapstatetopropsconnectedlist
// connect (in this case) takes a single argument, a function, 
// that maps the Redux state to your component's properties.
// connect then returns a function which you call with ConnectedList, your component.

// This is called a Higher-Order Component (HOC), which is nothing more than a component 
// (or component-like functionality) that wraps your component with code that does "things" 
// then renders your component.
// https://reactjs.org/docs/higher-order-components.html

// In this case, the HOC takes the Redux state you've specified in your 
// mapStateToProps function and sends that state (as props) to your component, 
// which it renders.

export default List;
// List es el resultado de conectar el componente sin estado ConnectedList con la store.