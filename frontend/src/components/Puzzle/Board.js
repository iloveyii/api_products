import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PuzzleModel from "../../models/Puzzle";

const Cell = ({ cell, onClick }) => {
  return (
    <span onClick={onClick} className="puzzle__cell">
      {cell.value + " "}
    </span>
  );
};
const styles = (theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

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
    const { puzzle, onClick } = this.props;
    return (
      <Paper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "3%",
          }}
        >
          <div className="puzzle__container">
            <div className="puzzle__inner">
              {puzzle.values.map((row, i) => (
                <p
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "3px",
                    padding: 0,
                    justifyContent: "center",
                  }}
                >
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
