import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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

export default function Timer({ createAction }) {
  return (
    <CountdownCircleTimer
      key={1}
      size="45"
      strokeWidth="5"
      isPlaying
      duration={30}
      colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      onComplete={() => {
        createAction && createAction();
        return [true, 1000];
      }}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
}
