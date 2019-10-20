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
  // (checklistToRestore === null) {
  //   return (
  //     <Redirect
  //       push
  //       to={{
  //         pathname: "/completeChecklist",
  //         state: {
  //           submitted: false,
  //           filename: selected,
  //           questions: checklistdata
  //         }
  //       }}
  //     />
}

export default ContentMenu;
