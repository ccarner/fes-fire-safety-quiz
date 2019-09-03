import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageDatabase from "../db.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenu: [
        { name: "Quizzes", link: "/quizzes" },
        { name: "More about FES", link: "/information" },
        { name: "Review Knowledge", link: "/review" }
      ],
      imageURL: ""
    };
  }

  componentDidMount() {
    // NOTE had to use arrow function to ensure that 'this' binding was still to
    // the outer class...
    ImageDatabase.getImage("https://picsum.photos/200").then(imageString => {
      this.setState({ imageURL: imageString });
    });
  }

  render() {
    return (
      <React.Fragment>
        <img alt="" src={`data:image/jpeg;base64,${this.state.imageURL}`} />
        <h1>Home</h1>
        {this.state.mainMenu.map(option =>
          this.renderMenuOption(option.name, option.link)
        )}
      </React.Fragment>
    );
  }

  renderMenuOption(name, link) {
    return (
      <div>
        <Link to={`${link}`}>{name}</Link>
      </div>
    );
  }
}

export default HomePage;
