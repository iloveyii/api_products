import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Puzzle from "./Puzzle";
import { styles } from "./styles";

const Cell = ({ cell, onClick, className }) => {
  return (
    <span onClick={onClick} className={className}>
      {cell.value + " "}
    </span>
  );
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openPopup: false,
      form: {
        rows: 3,
        columns: 5,
      },
      puzzle: new Puzzle(3, 5),
      solved: false,
    };
  }

  render() {
    const { puzzle, onClick, classes } = this.props;
    return (
      <Paper component="form">
        <div className={classes.puzzleContainer}>
          <div className={classes.puzzleInner}>
            {puzzle.values.map((row, i) => (
              <p key={i} className={classes.row}>
                {row.map((cell, j) => (
                  <Cell
                    className={classes.puzzleCell}
                    key={j}
                    onClick={() => onClick(cell)}
                    cell={cell}
                  />
                ))}
              </p>
            ))}
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Board);
