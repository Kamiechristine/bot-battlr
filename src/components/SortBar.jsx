import React from "react";

function SortBar({ setSortBy }) {
  return (
    <div className="SortBar">
      <button onClick={() => setSortBy("health")}>Sort by Health</button>
      <button onClick={() => setSortBy("damage")}>Sort by Damage</button>
      <button onClick={() => setSortBy("armor")}>Sort by Armor</button>
    </div>
  );
}

export default SortBar;
