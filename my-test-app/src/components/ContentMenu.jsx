import React from "react";
import ButtonBases from "./newMenu";
import useStyles from "./menustyle";

function ContentMenu(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {props.menuOptions &&
        props.menuOptions
          .filter(option => option.filename.split(".")[0] !== "index")
          .map(option =>
            ButtonBases(
              option.filename,
              option.filename,
              "",
              classes,
              props.handleClickOpen
            )
          )}
    </React.Fragment>
  );
}

export default ContentMenu;
