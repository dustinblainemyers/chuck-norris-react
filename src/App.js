import React from "react";
import Quote from "./components/quote";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Quote />
      <Header />
      <Modal />
      <Form />
    </div>
  );
}

