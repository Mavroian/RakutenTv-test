import React from 'react';
const Movie = (movieProps) => {
  console.log(movieProps)
  let url = movieProps.images.artwork.slice(movieProps.images.artwork.length - 4) === "jpeg" ? movieProps.images.artwork.split(".jpeg").join("-width217-quality80.jpeg") : movieProps.images.artwork.split(".png").join("-width217-quality80.png")
  console.log(movieProps.images.artwork.slice(movieProps.images.artwork.length - 4))
  return (
    <div>
      <div>
        <img src={url} />
      </div>
    </div>
  );
};
export default Movie;