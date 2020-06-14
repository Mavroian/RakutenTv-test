import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './player.styles.scss'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streamingUrl: ''
    }
  }
  componentDidMount() {
    const { movie, type } = this.props.match.params
    try {
      axios.post(`http://localhost:3000/${type}/${movie}/trailer`)
        .then(response => {
          this.setState({ streamingUrl: response.data.data.stream_infos[0].url })
        })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <Fragment>
        {
          this.state.streamingUrl.length > 0 &&
          <div className="trailer-player">
            <video width="900" height="600" autoPlay controls >
              <source src={this.state.streamingUrl} type="video/mp4" />
            </video>
          </div>
        }
      </Fragment>
    )
  }
}

export default Player