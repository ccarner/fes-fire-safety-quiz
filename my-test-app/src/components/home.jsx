import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageDatabase from "../db.js";

class HomePage extends Component {
  state = {
    mainMenu: [
      { name: "Quizzes", link: "/quizzes" },
      { name: "More about FES", link: "/information" },
      { name: "Review Knowledge", link: "/review" }
    ]
  };
  render() {
    const data = ImageDatabase.getImage("https://via.placeholder.com/150");
    return (
      <React.Fragment>
        <img alt="" src={`data:image/jpeg;base64,${data}`} />
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
