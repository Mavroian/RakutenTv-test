import React, { Component } from 'react';
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import "./slider.styles.scss"

class MovieSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: 0,
      images: [
        "https://images-0.wuaki.tv/system/images/4662/original/judy-slider-1590743255-width1400-quality80.jpeg",
        "https://images-3.wuaki.tv/system/images/4754/original/el-escandalo-slider-1591169064-width1400-quality80.jpeg",
        "https://images-0.wuaki.tv/system/images/4661/original/adu-slider-1590743211-width1400-quality80.jpeg",
        "https://images-1.wuaki.tv/system/images/4833/original/fantasy-island-4k-slider-1591341510-width1400-quality80.jpeg",
        "https://images-1.wuaki.tv/system/images/3722/original/new-channels-avod-1582182106-width1400-quality80.jpeg",
        "https://images-0.wuaki.tv/system/images/150/original/svod-generic-vis-reg-1572864648-width1400-quality80.jpeg",
        "https://images-0.wuaki.tv/system/images/4670/original/animate-promo-slider-1590745143-width1400-quality80.jpeg",
      ]
    };
  }
  componentDidMount() {
    this.sliderInterval = setInterval(() => {
      let index = this.state.activeIndex;
      let length = this.state.images.length;
      if (index === length - 1) {
        index = 0
      } else if (index < 0) {
        index = 0
      } else {
        index++
      }
      this.setState({ activeIndex: index })
    }, 3000);
  }
  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.images.length;
    if (index < 1) {
      index = length - 1;
    }
    else {
      index--;
    }
    if (index < 0) {
      index = 0
    }
    this.setState({
      activeIndex: index
    });
  }
  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.images.length;
    if (index === length - 1) {
      index = 0
    }
    else {
      index++;
    }
    if (index > length) {
      index = 0
    }
    this.setState({
      activeIndex: index
    });
  }
  toogleClass() {
    const activeIndex = this.state.activeIndex
    if (activeIndex < 0) {

    }
  }
  componentWillUnmount() {
    clearInterval(this.sliderInterval)
  }
  render() {
    return (
      <div className='slider'>
        <div className='slider-items'>
          <LeftArrow
            goToPrevSlide={() => this.goToPrevSlide()}
          />
          <div className='slider-text'>
            {this.state.images.map((img, index) => (
              <div key={index} className={index === this.state.activeIndex ? 'active' : 'inactive'}>
                <img src={img} alt="movie Image" />
              </div>
            ))}
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