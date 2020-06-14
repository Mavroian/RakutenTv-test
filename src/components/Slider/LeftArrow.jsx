import React, { Component } from 'react';
import "./leftArrow.styles.scss"
class LeftArrow extends Component {
  render() {
    return (
      <div className='leftArrow' onClick={this.props.goToPrevSlide}>
        <i style={{ color: "white" ,'textShadow': '1px 1px 0px #000'}} className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
      </div>
    )
  }
}
export default LeftArrow;