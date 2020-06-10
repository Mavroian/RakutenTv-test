
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Header from './components/Header/Header';
import MovieListContainer from './components/Movies/MoviesList-Container/MoviesListContainer'
import { Provider } from 'react-redux';
import './app.scss'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: [
                "estrenos-imprescindibles",
                "peliculas-gratis",
                "starzplay-series-exclusivas-y-originales",
                "free-rakuten-stories",
                "peliculas-mas-vistas-en-alquiler",
                "estrenos-recomendados-en-taquilla",
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
            <div>
                <h1>Welcome to RacutenTV!</h1>
                <Header />
                {
                    this.state.sections.map((section, index) => (
                        <MovieListContainer key={index} id={section} />
                    ))
                }
            </div>

        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));