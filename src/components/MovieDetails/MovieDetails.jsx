import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import './movieDetails.styles.scss'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
      streamingUrl: ""
    }
  }
  componentDidMount() {
    const { movie, type } = this.props.match.params

    try {
      axios.get(`/${type}/${movie}`)
        .then(response => {
          this.setState({ movie: response.data.data })
        })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const movieObj = this.state.movie
    const { movie, type } = this.props.match.params
    return (
      <div className="details">
        {
          movieObj.images &&
          <div className="details-picture">
            <img src={movieObj.images.snapshot} alt="movie snapshot" />
            <div className="details-actions">
              <div className="details-action-play">
                <Link to={`/${type}/${movie}/trailer`}>
                  <span className="details-play">
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </span>
                </Link>
                <span className="details-trailer">
                  TRÁILER
                </span>
              </div>
              <div className="details-action-pin">
                <span className="details-pin">
                  <i className="fas fa-thumbtack"></i>
                </span>
                <span className="details-pin-text">
                  AÑADIR A QUIERO VER
                  </span>
              </div>
              <span></span>
            </div>
            <div className="details-title">
              <div className="details-title-pos">
                <h1>{movie.title}</h1>
              </div>
            </div>
            <div className="details-buy">
              <div className="ver-ahora">
                <div className="details-price">
                  {
                    movieObj.order_options ?
                      <>
                        <span>Ver Ahora</span>
                        <span style={{
                          fontSize: '13px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        >
                          Desde {movieObj.order_options[0].price} o {movieObj.order_options[0].points.cost}p
                        </span>
                      </>
                      :
                      <>
                        <span> {movieObj.subscription_plans.length > 0 ? movieObj.subscription_plans[0].name : ''}</span>
                        <span style={{
                          fontSize: '13px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        >
                          ¡Prueba gratis!
                        </span>
                      </>
                  }

                </div>
              </div>
              <div className="canjear-cupon">
                <div className="canjear-text">
                  <span>Canjear Cupon</span>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state
  };
};
export default connect(mapStateToProps)(MovieDetails);