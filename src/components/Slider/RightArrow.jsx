import React, { Component } from 'react';
import "./leftArrow.styles.scss"
class RightArrow extends Component {
  render() {
    return (
      <div className='rightArrow' onClick={this.props.goToNextSlide}>
        <i style={{ color: "white" ,'text-shadow': '1px 1px 0px #000'}} className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
      </div>
    )
  }
}
export default RightArrow;