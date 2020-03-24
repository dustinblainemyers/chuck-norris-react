import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div>
        <p>Chuck Says...</p>
        <p> {this.props.quote}</p>
      </div>
    );
  }
}

export default Quote;
