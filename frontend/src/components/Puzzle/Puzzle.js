const DEFAULT_ROWS = 3;
const DEFAULT_COLS = 5;

class Cell {
  constructor(r, c, value) {
    this.r = r;
    this.c = c;
    this.value = value;
  }
  isEmpty = () => this.value === "";
  sameCol = (c2) => this.c === c2.c;
  sameRow = (c2) => this.r === c2.r;
  valueIs = (num) => this.value === num;
}

class Puzzle {
  constructor(rows, columns) {
    const r = rows > 0 ? rows : DEFAULT_ROWS;
    const c = columns > 0 ? columns : DEFAULT_COLS;
    this.values = [r][c];
    this.random_numbers = this.getRandom(r, c);
    this.values = this.fillArray(r, c);
    this.rows = r;
    this.columns = c;
  }

  getRandom(rows, columns) {
    let numbers = Array(rows * columns);
    for (let i = 0; i < rows * columns; i++) {
      numbers[i] = i + 1;
    }
    const random_numbers = [...numbers].map(() => {
      const num = numbers[Math.floor(Math.random() * (numbers.length - 1))];
      numbers = numbers.filter((item) => item !== num);
      return num;
    });
    return random_numbers;
  }

  fillArray(rows, columns) {
    const values = Array(rows)
      .fill()
      .map(() => Array(columns).fill(""));
    let count = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const rNum = this.random_numbers[count++];
        values[r][c] = new Cell(r, c, rNum);
      }
    }
    values[rows - 1][columns - 1].value = "";
    return values;
  }

  canMove(c1, c2) {
    if (c1.sameCol(c2)) {
      return "col";
    }
    if (c1.sameRow(c2)) {
      return "row";
    }
    return false;
  }

  moveDown(c1, c2) {
    for (let r = c2.r; r > c1.r; r--) {
      this.values[r][c1.c].value = this.values[r - 1][c1.c].value;
    }
    this.values[c1.r][c1.c].value = "";
  }

  moveUp(c1, c2) {
    for (let r = c2.r; r < c1.r; r++) {
      this.values[r][c1.c].value = this.values[r + 1][c1.c].value;
    }
    this.values[c1.r][c1.c].value = "";
  }

  moveRight(c1, c2) {
    for (let c = c2.c; c > c1.c; c--) {
      this.values[c1.r][c].value = this.values[c1.r][c - 1].value;
    }
    this.values[c1.r][c1.c].value = "";
  }

  moveLeft(c1, c2) {
    for (let c = c2.c; c < c1.c; c++) {
      this.values[c1.r][c].value = this.values[c1.r][c + 1].value;
    }
    this.values[c1.r][c1.c].value = "";
  }

  move(c1, c2, direction) {
    if (direction === "col") {
      if (c1.r < c2.r) {
        this.moveDown(c1, c2);
      } else {
        this.moveUp(c1, c2);
      }
      // console.log("After move : ", this.values);
    }

    if (direction === "row") {
      if (c1.c < c2.c) {
        this.moveRight(c1, c2);
      } else {
        this.moveLeft(c1, c2);
      }
      // console.log("After move : ", this.values);
    }
  }

  findEmpty() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        if (this.values[r][c].isEmpty()) {
          return this.values[r][c];
        }
      }
    }
  }

  isSolved() {
    let count = 1;
    let solved = false;
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        if (this.values[r][c].valueIs(count++)) {
          solved = true;
        } else {
          if (r === this.rows - 1 && c === this.columns - 1) {
            return solved;
          }
          return false;
        }
      }
    }
    return solved;
  }
}

export default Puzzle;
