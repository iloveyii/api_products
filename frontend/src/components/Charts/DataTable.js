import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ShlGrid from "../ShlGrid";

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

export default function SportsTable({ logs, createAction }) {
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
          <div
            style={{
              float: "right",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CountdownCircleTimer
              key={1}
              size="45"
              strokeWidth="5"
              isPlaying
              duration={20}
              colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
              onComplete={() => {
                createAction && createAction({ query });
                return [true, 1000];
              }}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
        </h4>
      </div>
      <div className="card-body table-responsive">
        <ShlGrid shl={logs} />
      </div>
    </div>
  );
}
