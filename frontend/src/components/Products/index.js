import React, { useEffect } from "react";
import { classnames, DataGrid, numberComparer } from "@material-ui/data-grid";
import { ObjectID } from "bson";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";
import { columns, products } from "./mockup";

const sortModel = [
  {
    field: "position",
    sort: "asc",
  },
];

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: products.data.products };
  }

  setForm = (props) => {
    const { products } = props;
    if (products && Array.isArray(products) && products.length > 0) {
      console.log("products");
      const data = products.map((row, i) => ({ ...row, id: i + 1 }));
      this.setState({ data });
    }
  };

  componentDidMount() {
    this.setForm(this.props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setForm(nextProps);
  }
  render() {
    const { data } = this.state;
    const { classes } = this.props;

    return (
      <div style={{ minHeight: 800, width: "100%", overflow: "auto" }}>
        <DataGrid
          rowHeight={75}
          //  className={[classes.cell]}
          rows={data}
          columns={columns}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Products);
