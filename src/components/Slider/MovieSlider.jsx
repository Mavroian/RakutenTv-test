import React, { Component } from 'react';
import MovieList from '../Movies/MoviesList'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import "./slider.styles.scss"

class MovieSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 6,
      length: 0
    };
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.props.movies.length;

    if (index < 6) {
      index = length - 6;
    }
    else {
      index = index - 6;
    }
    if (index < 6) {
      index = length
    }

    this.setState({
      activeIndex: index
    });
  }
  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.props.movies.length;
    if (index === length - 1) {
      index = 0
    }
    else {
      index = index + 6
    }
    if (index > length) {
      index = 6
    }
    this.setState({
      activeIndex: index
    });
  }
  render() {
    return (
      <div className='slider'>
        <div className='slider-items'>
          <LeftArrow
            goToPrevSlide={() => this.goToPrevSlide()}
          />
          <div className='slider-text'>
            <MovieList
              movies={this.props.movies}
              activeIndex={this.state.activeIndex}
            />
          </div>
          <RightArrow
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
      </div>
    );
  }
}
export default MovieSlider