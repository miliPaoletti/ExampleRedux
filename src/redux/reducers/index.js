import { ADD_ARTICLE } from "../constants/actionTypes";

const initialState = {
    articles: []
  };

// Los reductores producen el estado de una aplicación.
// única forma de cambiar el estado es enviando una señal a la store (enviar una accion).

// reductor dice «oh, veamos la propiedad type de esta acción». 
// Luego, dependiendo del tipo de acción, el reductor produce el siguiente estado 
// y finalmente fusiona el payload de la acción en el nuevo estado.

  
//   estado inicial como parametro predeterminado. 
  function ArticlesRedux(state = initialState, action) {
    //   si matchea, devuelve lo que ya estaba en state y agrega en articles lo del payload.
    if (action.type === ADD_ARTICLE) {
           return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
          });
    }
     
    // devuelve el estado inicial. 
    return state;
  };
  
  export default ArticlesRedux;