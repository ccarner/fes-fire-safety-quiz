import React, { Component, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ImageDatabase from "../db.js";
import Button from "@material-ui/core/Button";
import ButtonBases from "./ButtonBases";
import background1 from "./pictures/textbooks.jpg";
import background2 from "./pictures/FESlogo.jpg";
import background3 from "./pictures/Man-filling-up-checklist.jpg";

function doLink(thing) {
  return (window.location = thing);
}
function SafetyPage(props) {
  const [mainMenu, setMenu] = useState([
    {
      name: "Information Modules",
      link: "/infoModule",
      url: background1
    },
    {
      name: "Building Safety Checklist",
      link: "/buildingCheck",
      url: background3
    }
  ]);

  return (
    <React.Fragment>
      <h1>Safety</h1>
      {mainMenu.map(option =>
        ButtonBases(option.name, option.link, option.url, doLink)
      )}
    </React.Fragment>
  );
}
function renderMenuOption(name, link) {
  return (
    <div>
      <Link to={`${link}`}>{name}</Link>
    </div>
  );
}
export default SafetyPage;
