import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Products from "../Products";

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

export default function ProductsTable({ products, createAction }) {
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
        <Products products={products} />
      </div>
    </div>
  );
}
