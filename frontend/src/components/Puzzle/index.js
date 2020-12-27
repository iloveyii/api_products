import React from "react";
import PageHeader from "../PageHeader";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Header } from "../../layouts";
import Puzzle from "./Puzzle";
import Form from "./Form";
import Board from "./Board";
import Result from "./Result";
import { styles } from "./styles";

class Index extends React.Component {
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

  onClick = (cell) => {
    const { puzzle } = this.state;
    const emptyCell = puzzle.findEmpty();
    const direction = puzzle.canMove(cell, emptyCell);
    if (direction !== false) {
      puzzle.move(cell, emptyCell, direction);
      this.setState({ puzzle, solved: puzzle.isSolved() });
    }
  };

  onRandomize = () => {
    const { rows, columns } = this.state.form;
    this.setState({
      puzzle: new Puzzle(Number(rows), Number(columns)),
      solved: false,
    });
  };

  onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { form } = this.state;
    this.setState({ form: { ...form, [name]: value } });
  };

  render() {
    const { classes } = this.props;
    const { puzzle, form } = this.state;
    return (
      <div className={classes.main}>
        <Header />
        <Container maxWidth="md">
          <PageHeader
            title="N - PUSSEL"
            subtitle="Lös följände pussel"
            imageUrl="/images/puzzle.jpg"
          />
          <br />
          <Form
            onChange={this.onChange}
            onRandomize={this.onRandomize}
            form={form}
          />
          <Board puzzle={puzzle} onClick={this.onClick} />
          <br />
          {this.state.solved && <Result />}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
