import React from "react";

function BotCard({ bot, enlistBot }) {
  return (
    <div className="BotCard">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default BotCard;
