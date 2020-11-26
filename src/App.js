import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      is1Filled: false,
      is2Filled: false,
      is3Filled: false,
      is4Filled: false,
      is5Filled: false,
      is6Filled: false,
      is7Filled: false,
      is8Filled: false,
      is9Filled: false,
      turn: "You",
    };
  }

  fillTheBox = (id) => {
    console.log("clicked", id);
    console.log(this.state.turn);
    if (this.state.turn === "You") {
      this.setState({
        turn: "Computer",
      });
    } else {
      this.setState({
        turn: "You",
      });
    }
  };

  render() {
    return (
      <main>
        <h1>Tic Tac Toe</h1>
        <section className="scoreBoard">
          <h2>
            Player 1: <span>0</span>
          </h2>
          <h2>
            Player 2: <span>0</span>
          </h2>
        </section>
        <section>
          <table>
            <tr>
              <th
                id="1"
                onClick={() => {
                  this.fillTheBox(1);
                }}
              ></th>
              <th
                id="2"
                onClick={() => {
                  this.fillTheBox(2);
                }}
              ></th>
              <th
                id="3"
                onClick={() => {
                  this.fillTheBox(3);
                }}
              ></th>
            </tr>
            <tr>
              <th id="4"></th>
              <th id="5"></th>
              <th id="6"></th>
            </tr>
            <tr>
              <th id="7"></th>
              <th id="8"></th>
              <th id="9"></th>
            </tr>
          </table>
        </section>
        <section>It's {this.state.turn}.</section>
      </main>
    );
  }
}
