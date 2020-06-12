import React from 'react';
import "./movie.style.scss"
const Movie = (props) => {
  const ribbon = props.movieProps.images.ribbons[0] ? props.movieProps.images.ribbons[0].name : null
  let baseUrl = props.movieProps.images.artwork
  const url = baseUrl.slice(baseUrl.length - 4) === "jpeg" ?
    baseUrl.split(".jpeg").join("-width217-quality80.jpeg") :
    baseUrl.split(".png").join("-width217-quality80.png")

  const toogleClass = () => {
    if (props.activeIndex > 6 && props.index < 6) {
      return 'inactive'
    } else if(props.activeIndex > 12 && props.index < 12 && props.index > 5 ){
      return 'inactive'
    }else if (props.index < props.activeIndex) {
      return 'active'
    } else {
      return 'inactive'
    }
  }
  console.log(props.id)
  return (
    < div className={toogleClass()}>
      <div className="list__item" >
        <div >
          <img src={url} />
          <div className="artwork-ribbons">
            {
              ribbon &&
              <span className="label">
                {ribbon}
              </span>
            }
          </div>
        </div>
      </div>
    </div >

  );
};
export default Movie;