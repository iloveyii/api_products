import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Products from "../Products";
import Timer from "../Timer";
import { styles } from "./styles";

const query = `
  {
    logs {
      id
      team_id
      name
      url
      position
      stat {
      GP, W, L, T, OTW, OTL, PTS, GF, GA, GD
      } 
      timestamp
    }
  }
`;
const renderTime = ({ remainingTime }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: "12px", textAlign: "center" }}>
        {remainingTime}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => styles(theme));

export default function ProductsTable({ products, createAction }) {
  const classes = useStyles();

  return (
    <div className="card">
      <div className={"card-header card-header-info"}>
        <h4 className="card-title">
          <img src="/images/ep-logo.svg" height="50" />
          <div className={classes.timerContainer}>
            <Timer createAction={() => createAction(query)} />
          </div>
        </h4>
      </div>
      <div className="card-body table-responsive">
        <Products products={products} />
      </div>
    </div>
  );
}
