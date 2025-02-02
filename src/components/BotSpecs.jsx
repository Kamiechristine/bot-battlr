// BotSpecs.js
import React from "react";

function BotSpecs({ bot, enlistBot, goBack }) {
  const handleEnlist = () => {
    enlistBot(bot);
  };

  return (
    <div className="BotSpecs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      
      <button onClick={goBack}>Back to Bot Collection</button>
      <button onClick={handleEnlist}>Enlist this Bot</button>
    </div>
  );
}

export default BotSpecs;
