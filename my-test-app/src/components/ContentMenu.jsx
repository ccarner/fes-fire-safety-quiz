import React from "react";
import ButtonBases from "./newMenu";
import useStyles from "./menustyle";

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

  return (
    <React.Fragment>
      {props.menuOptions &&
        props.menuOptions
          .filter(
            option =>
              option.filename.split(".")[0] !== "index" &&
              !option.filename.includes("hidden_")
          )
          .map(option =>
            ButtonBases(
              titleToDisplay(option),
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
