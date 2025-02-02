// ReleaseButton.js
import React from "react";

function ReleaseButton({ botId, releaseBot }) {
  return (
    <button onClick={() => releaseBot(botId)}>Release</button>
  );
}

export default ReleaseButton;
