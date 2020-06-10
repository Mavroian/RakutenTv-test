import React from 'react';
import Movie from './Movie';

const MoviesList = (props) => {
  return (
    <div style={{ display: "inline-flex" }}>
      {props.movies && props.movies.map(({ id, ...movieProps }) => (
        <Movie key={id} {...movieProps} />
      ))
      }
    </div>
  );
};

export default MoviesList