import React, { Component } from "react";
import chuckImage from "../../public/images/chuck.jpeg";
console.log(chuckImage);
class Header extends Component {
  render() {
    console.log("yep");
    return (
      <header>
        <h1>Chuck Norris Joke Generator</h1>
        <div className="wrapper--image">
          <img src={chuckImage} alt="chuck" />
        </div>
      </header>
    );
  }
}

export default Header;
