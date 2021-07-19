// La propiedad type controla cómo debería cambiar el estado y
//  Redux siempre la requiere. En cambio, la propiedad de payload
// describe lo que debería cambiar y podría omitirse si no 
// tiene nuevos datos para guardar en la store.

// Cuando se envía una acción, 
// la store reenvía un mensaje (el objeto de acción) al reductor.

import { ADD_ARTICLE } from "../constants/actionTypes";


// Como práctica recomendada en Redux, envolvemos cada acción dentro de una función, 
// de modo que la creación de objetos se abstraiga

// TYPE: string --> constantes.

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };