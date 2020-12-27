import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ShlGrid from "../ShlGrid";
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

const useStyles = makeStyles((theme) => styles(theme));

export default function SportsTable({ logs, createAction }) {
  const classes = useStyles();

  return (
    <div className="card">
      <div
        className={"card-header card-header-info"}
        style={{
          background: "linearGradient(60deg, black, #063950) !important",
        }}
      >
        <h4 className="card-title">
          <img src="/images/ep-logo.svg" height="50" />
          <div className={classes.timerContainer}>
            <Timer createAction={() => createAction(query)} />
          </div>
        </h4>
      </div>
      <div className="card-body table-responsive">
        <ShlGrid shl={logs} />
      </div>
    </div>
  );
}
