import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import ButtonBases from "./newMenu";
import useStyles from "./menustyle";
import IndexedDataBase from "../dataStorage.js";

function ContentMenu(props) {
  const classes = useStyles();

  //safely get title
  function titleToDisplay(option) {
    let title;
    try {
      title = option.metadata.title;
    } catch (err) {
      title = option.filename;
    }
    return title;
  }
  const [showHidden, setShowHidden] = useState(false);

  useEffect(() => {
    IndexedDataBase.getPreference("showHiddenContent").then(values => {
      setShowHidden(values[0].value);
    });
  }, []);

  function showHiddenFileName(fileName) {
    if (!showHidden && fileName.includes("hidden_")) {
      // don't show this hidden file to the user, unless configured it
      return false;
    }
    return true;
  }

  // lets us know if files are hidden
  function formatTitle(option) {
    let title = titleToDisplay(option);
    if (option.filename.includes("hidden_")) {
      return "[Hidden] " + title;
    }
    return title;
  }

  return (
    <React.Fragment>
      {props.menuOptions &&
        props.menuOptions
          .filter(option => {
            return (
              option.filename.split(".")[0] !== "index" &&
              showHiddenFileName(option.filename)
            );
          })
          .map(option =>
            ButtonBases(
              formatTitle(option),
              option,
              "",
              classes,
              props.handleClickOpen
            )
          )}
    </React.Fragment>
  );
}

export default ContentMenu;
