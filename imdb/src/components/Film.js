import React, { Component } from 'react';

class Film extends Component {
  render() {
    return (
      <div className="movie">
        <h4 className="movie-title">{this.props.title}</h4>

      </div>
    )
  }
}

export default Film;
