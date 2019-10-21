import React from "react";

import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

function ButtonBases(name, fileName, url, classes, handleClickOpen) {
  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={name}
        //when clicked, open the dialog popup box
        onClick={() => {
          handleClickOpen(fileName);
        }}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%"
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${url})`
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
            np
          >
            {name}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}

export default ButtonBases;
