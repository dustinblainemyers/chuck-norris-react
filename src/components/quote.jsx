import React, { Component } from "react";

class Quote extends Component {
    componentDidMount() {
        this.setState(

          { quote =  "This is one quote"}
        )
    }
  render() {
      const {quote} = this.state;
    return (
      <div>
        <p>Chuck Says...</p>
        <p> {quote}</p>
      </div>
    );
  }
}

export default Quote;
