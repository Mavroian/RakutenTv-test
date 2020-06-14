import React from 'react';
import "./movie.style.scss"
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import getMovies from '../../actions/movies';

const Movie = (props) => {
  const movie = props.movieProps.title
    .split(' ')
    .join('-')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\])}[{(]/g, '')
    .replace(/:/g, '')
  const type = props.movieProps.type
  const ribbon = props.movieProps.images.ribbons[0] ? props.movieProps.images.ribbons[0].name : null
  let baseUrl = props.movieProps.images.artwork
  const url = baseUrl.slice(baseUrl.length - 4) === "jpeg" ?
    baseUrl.split(".jpeg").join("-width217-quality80.jpeg") :
    baseUrl.split(".png").join("-width217-quality80.png")

  const toogleClass = () => {
    if (props.activeIndex > 6 && props.index < 6) {
      return 'inactive'
    } else if (props.activeIndex > 12 && props.index < 12 && props.index > 5) {
      return 'inactive'
    } else if (props.index < props.activeIndex) {
      return 'active'
    } else {
      return 'inactive'
    }
  }
  const handleClick = () => {

    props.getMovie(props.movieProps)
  }
  return (
    < div className={toogleClass()}>
      <div className="list__item" >
        <Link to={`${type}/${movie}`} onClick={handleClick}>
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
        </Link>
      </div>
    </div >

  );
};

const mapDispatchToProps = (dispatch) => ({
  getMovie: movie => dispatch(getMovies(movie))
})
export default connect(null, mapDispatchToProps)(Movie);