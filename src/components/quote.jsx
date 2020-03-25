import React, { Component } from "react";

class Quote extends Component {
  state = {
    quote: 'Fetching quote...'
  };
    async componentDidMount() {
       try {
        const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
        const data = await response.json();
        console.log("data is ", data);


      } catch (error) {
          return error;

      }
        
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
