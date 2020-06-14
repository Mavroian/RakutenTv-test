
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom"
import Header from './components/Header/Header';
import HomePage from './components/Homepage/HomePage'
import MovieDetails from './components/MovieDetails/MovieDetails'
import Player from './components/Player/Player'
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
            <HashRouter basename="/">
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/:type/:movie/trailer" component={Player} />
                        <Route path="/:type/:movie" component={MovieDetails} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));