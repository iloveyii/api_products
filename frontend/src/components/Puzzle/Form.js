import React from "react";
import { Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PuzzleModel from "./Puzzle";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ViewWeekSharpIcon from "@material-ui/icons/ViewWeekSharp";
import CachedSharpIcon from "@material-ui/icons/CachedSharp";

const styles = (theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 4,
  },
  iconButton: {
    flex: 1,
  },
  button: {
    flex: 1,
    marginRight: 5,
  },
  div: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    margin: "0 20px",
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class Form extends React.Component {
  render() {
    const { classes, onChange, onRandomize, form } = this.props;
    return (
      <Paper component="form" className={classes.root}>
        <div className={classes.div}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Rows"
            name="rows"
            value={form.rows}
            onChange={onChange}
            inputProps={{ "aria-label": "Enter rows" }}
          />
        </div>

        <div className={classes.div}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <ViewWeekSharpIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            name="columns"
            value={form.columns}
            placeholder="Columns"
            onChange={onChange}
            inputProps={{ "aria-label": "Enter columns" }}
          />
        </div>

        <Button
          className={classes.button}
          margin="small"
          size="medium"
          variant="contained"
          color="primary"
          startIcon={<CachedSharpIcon />}
          onClick={onRandomize}
        >
          Reset
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(Form);
