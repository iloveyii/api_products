import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles((theme) => styles(theme));

const Result = () => {
  const classes = useStyles();

  return (
    <Paper component="div">
      <div className={classes.puzzleResultContainer}>
        Grattis, du löste pusslet!
      </div>
    </Paper>
  );
};
export default Result;
