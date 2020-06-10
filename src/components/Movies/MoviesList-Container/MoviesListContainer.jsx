import React, { Component } from 'react';
import MovieList from '../MoviesList'
import axios from 'axios'

class MovieListContainer extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    const { id } = this.props
    axios.get(`http://localhost:3000/${id}`)
      .then(response => {
        console.log(id)
        this.setState({ movies: response.data.data.contents.data })
      })
  }
  render() {
    console.log(this.state.movies)
    return (
      <div>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
};

export default MovieListContainer