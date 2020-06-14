import React, { Component, Fragment } from 'react';
import MovieSlider from '../../Slider/MovieSlider'
import axios from 'axios'
import "./moviesListContainer.styles.scss"

class MovieListContainer extends Component {
  constructor() {
    super()
    this._isMounted = false
    this.state = {
      movies: [],
      sections: [
        "Estrenos imprescindibles en TAQUILLA",
        "FREE - Películas Gratis",
        "Starzplay - Series Exclusivas y Originales",
        "FREE - Rakuten Stories",
        "Películas más vistas en Alquiler",
        "Estrenos recomendados en TAQUILLA",
        "Rakuten TV Suscripción - Más populares",
        "Universo DC",
        "¡Anímate!",
        "Aventuras de Animación en Alquiler",
        "FREE - TV Infantil",
        "Películas populares en Compra",
        "Alquila por 1,99€ o menos",
        "Alquila por 2,99€ o menos",
        "Alquila por 3,99€ o menos",
        "FREE - Documentales",
        "Starzplay - Series Policíacas y de Suspense",
        "Adrenalina en vena",
        "¡Risas y buen rollo!",
        "¿Te atreves? Escalofríos asegurados",
        "Emoción a flor de piel",
        "Historias de otro mundo",]
    }
  }

  componentDidMount() {
    this._isMounted = true
    const { id } = this.props
    try {
      axios.get(`http://localhost:3000/lists/${id}`)
        .then(response => {
          if (this._isMounted) {
            this.setState({ movies: response.data.data.contents.data })
          }
        })
    } catch (error) {
      console.log(error)
    }

  }
  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <Fragment>
        {
          this.state.movies.length > 0 &&
          <div className='movie-slider-container'>
            <h2 className="section_title"> {this.state.sections[this.props.index]}</h2>
            <MovieSlider movies={this.state.movies} length={this.state.movies.length} />
          </div>
        }
      </Fragment>
    );
  }
};

export default MovieListContainer