// mapStateToProps hace exactamente lo que sugiere su nombre: 
// conecta una parte del estado de Redux a los accesorios de un componente de React. 
// Al hacerlo, un componente React conectado tendrá acceso a la parte exacta del store 
// que necesita.


// const mapStateToProps = state => {
//   return { articles: [state.articles] };
  
// };


// obtiene los datos que estan en redux, a traves del reducer. 
export const getListArticles = (store) => ({ articles: store.articles });