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
        <div className="main">
          <CVForm />
          <div className="viewer">
            <div className="resume">
              <div className="profile">
                <h1>full name</h1>
                <p>email</p>
                <p>phone</p>
              </div>
              <div className="infos">
                <div className="education-list">
                  <h1>Education.</h1>
                  <div className="education-info">
                    <h2>school name</h2>
                    <p>subject</p>
                    <p>city</p>
                    <p>from</p>
                    <p>to</p>
                  </div>
                  <div className="education-info">
                    <h2>school name</h2>
                    <p>subject</p>
                    <p>city</p>
                    <p>from</p>
                    <p>to</p>
                  </div>
                </div>
                <div className="work-list">
                  <h1>Work Experience.</h1>
                  <div className="work-info">
                    <h2>position</h2>
                    <p>company</p>
                    <p>city</p>
                    <p>from</p>
                    <p>to</p>
                  </div>
                  <div className="work-info">
                    <h2>position</h2>
                    <p>company</p>
                    <p>city</p>
                    <p>from</p>
                    <p>to</p>
                  </div>
                  <div className="work-info">
                    <h2>position</h2>
                    <p>company</p>
                    <p>city</p>
                    <p>from</p>
                    <p>to</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
