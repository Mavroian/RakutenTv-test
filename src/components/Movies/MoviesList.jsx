import React from 'react';
import Movie from './Movie';

const MoviesList = (props) => {

  return (
    <div style={{ display: "inline-flex" }}>
      {props.movies && props.movies.map(({ id, ...movieProps }, index) => (
        <Movie 
          index={index} 
          activeIndex={props.activeIndex} 
          key={id} 
          id={id}
          movieProps={movieProps} 
          />
      ))
      }
    </div>
  );
};

export default MoviesList