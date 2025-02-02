import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import BotCard from "./components/BotCard";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch("https://bots-si0g.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    // Check if the bot is already in the army
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`https://bots-si0g.onrender.com/bots/${botId}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((bot) => bot.id !== botId));
      setBots(bots.filter((bot) => bot.id !== botId));
    });
  };

  const goBackToCollection = () => {
    setSelectedBot(null);
  };

  if (selectedBot) {
    return (
      <BotSpecs
        bot={selectedBot}
        enlistBot={enlistBot}
        goBack={goBackToCollection}
      />
    );
  }

  return (
    <div className="App">
      <h1 id="bot">Bot Battlr</h1>
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection
        bots={bots}
        setSelectedBot={setSelectedBot}
        enlistBot={enlistBot}
      />
    </div>
  );
}

export default App;