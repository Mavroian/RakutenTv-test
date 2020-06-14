const getMovies = (movies) => {
  return {
   type: 'GET_MOVIES',
   movies
  };
};

export default getMovies