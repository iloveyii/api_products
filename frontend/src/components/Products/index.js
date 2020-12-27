import React from "react";
import { DataGrid } from "@material-ui/data-grid";
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
    if (products && Array.isArray(products) && products.length > 1) {
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
    console.log("DataGrid", data);
    const { classes } = this.props;

    return (
      <div style={{ minHeight: 800, width: "100%", overflow: "auto" }}>
        {data && data.length > 1 ? (
          <DataGrid rowHeight={75} rows={data} columns={columns} />
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Products);
