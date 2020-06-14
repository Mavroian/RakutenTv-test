
import React, { Fragment } from 'react';
import MovieListContainer from '../Movies/MoviesList-Container/MoviesListContainer'
import Slider from '../Slider/Slider'

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: [
        "estrenos-imprescindibles-en-Taquilla",
        "peliculas-gratis",
        "starzplay-series-exclusivas-y-originales",
        "free-rakuten-stories",
        "peliculas-mas-vistas-en-alquiler",
        "estrenos-recomendados-en-taquilla-416e44cd-d691-4802-905c-a045325f49b1",
        "rakuten-tv-suscripcion-mas-populares",
        "universo-dc",
        "animate",
        "aventuras-de-animacion-en-alquiler",
        "free-tv-infantil",
        "peliculas-populares-en-compra",
        "alquila-por-1-99-o-menos",
        "alquila-por-2-99-o-menos",
        "alquila-por-3-99-o-menos",
        "free-documentales",
        "starzplay-series-policiacas-y-de-suspense",
        "adrenalina-en-vena",
        "risas-y-buen-rollo",
        "te-atreves-escalofrios-asegurados",
        "emocion-a-flor-de-piel",
        "historias-de-otro-mundo",
      ]
    }
  }
  render() {
    return (
      <Fragment>
        <Slider />
        <div className="movies-lists">
          {
            this.state.sections.map((section, index) => (
              <MovieListContainer key={index} index={index} id={section} />
            ))
          }
        </div>
      </Fragment>
    )
  }
}

export default HomePage