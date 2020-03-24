import React from "react";
import Quote from "./components/quote";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Quote quote="life is a box of chocolates"/>
      <Header />
      <Modal />
      <Form />
    </div>
  );
}

