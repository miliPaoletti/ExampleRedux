import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../redux/actions/index";

// mapDispatchToProps conecta las acciones de Redux con los props de React
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });   
  }

  // El método handleSubmit envía una acción
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle([ title ]);
    // deja el input vacio
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

// connect y dispatch
//  el primer argumento para conectar debe ser nulo cuando mapStateToProps está ausente. 
// U obtendrá el mensaje TypeError: el envío no es una función.
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

// Form es el resultado de conectar ConnectedForm con la tienda Redux.
export default Form;