import React, { Component } from "react";

class Quote extends Component {
    componentDidMount() {
       
        setTimeout(() => {
          this.setState(

            this.quote = "yep";
          )
        }, 5000);
        
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
