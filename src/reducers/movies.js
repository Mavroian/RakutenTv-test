
const moviesReducer = (state = [], action) => {
  switch(action.type) {
   case 'GET_MOVIES':
    return [...state, ...action.movies];
  }
 };

 export default moviesReducer;