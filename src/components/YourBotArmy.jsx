import React from "react";
function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="YourBotArmy">
      {army.map((bot) => (
        <div key={bot.id} className="BotCard">
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p>{bot.catchphrase}</p>
          <button onClick={() => releaseBot(bot.id)}>Release</button>
          <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
