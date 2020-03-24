import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form id="categoryChangeForm">
          <label id="categorySelectLabel">Select a Category</label>
          <button type="submit" id="submitForm">
            Change Category
          </button>
        </form>
        <button type="button" id="getNorris">
          Refresh Quote
        </button>
      </div>
    );
  }
}

export default Form;