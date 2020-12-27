import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PuzzleModel from "../../models/Puzzle";
import { styles } from "./styles";

const Cell = ({ cell, onClick }) => {
  return (
    <span onClick={onClick} className="puzzle__cell">
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
      puzzle: new PuzzleModel(3, 5),
      solved: false,
    };
  }

  render() {
    const { puzzle, onClick, classes } = this.props;
    return (
      <Paper>
        <div className={classes.puzzleContainer}>
          <div className="puzzle__container">
            <div className="puzzle__inner">
              {puzzle.values.map((row, i) => (
                <p key={i} className={classes.row}>
                  {row.map((cell, j) => (
                    <Cell key={j} onClick={() => onClick(cell)} cell={cell} />
                  ))}
                </p>
              ))}
            </div>
          </div>
          <div style={{ height: "40px" }}>
            {this.state.solved ? <p>Congratulations, You solved it !</p> : ""}
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Board);
