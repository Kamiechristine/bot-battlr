import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="BotCollection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
      ))}
    </div>
  );
}

export default BotCollection;
