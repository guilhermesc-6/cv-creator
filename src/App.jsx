import "./App.css";
import { Component } from "react";
import { Header } from "./Components/Header";
import { CVForm } from "./Components/CVForm";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CVForm />
      </div>
    );
  }
}

export default App;
