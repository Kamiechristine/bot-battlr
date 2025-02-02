## Bot Battlr
Bot Battlr is a React-based application that allows users to browse a collection of bots, enlist them into their army, and manage their bot army. Users can view detailed specifications of each bot, release bots from their army, or permanently discharge them.

## Features
Bot Collection: Displays a list of available bots fetched from an API.

Enlist Bots: Users can add bots to their army.

Your Bot Army: Displays the list of enlisted bots.

Release Bots: Users can release bots from their army.

Discharge Bots: Users can permanently delete bots from the collection and their army.

Bot Specifications: Users can view detailed information about a selected bot.

## Technologies Used
React: A JavaScript library for building user interfaces.

JavaScript: Logic for managing bot data and user interactions.

CSS: Styling for the application.

Fetch API: Used to fetch bot data from the backend.

Installation
Follow these steps to set up the project locally:

Clone the repository:

bash
Copy
git clone https://github.com/your-username/bot-battlr.git
cd bot-battlr
Install dependencies:

bash
Copy
npm install
Run the application:

bash
Copy
npm start
Open the application:

Visit http://localhost:3000 in your browser to view the application.

Project Structure
Copy
bot-battlr/
├── src/
│   ├── components/
│   │   ├── BotCollection.js
│   │   ├── YourBotArmy.js
│   │   ├── BotSpecs.js
│   │   ├── BotCard.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── public/
│   ├── index.html
├── package.json
├── README.md

## Components
App.js
The main component that manages the state of the bots and the user's bot army.

Contains functions for enlisting, releasing, and discharging bots.

BotCollection.js
Displays a list of available bots fetched from the API.

Each bot can be selected to view its details or enlisted into the army.

YourBotArmy.js
Displays the list of bots enlisted in the user's army.

Allows users to release or discharge bots.

BotSpecs.js
Displays detailed information about a selected bot.

Allows users to enlist the bot or go back to the bot collection.

BotCard.js
A reusable component that displays the details of a single bot.

Code Example
Fetching Bots
jsx
Copy
useEffect(() => {
  fetch("https://bots-si0g.onrender.com/bots")
    .then((response) => response.json())
    .then((data) => setBots(data));
}, []);
Enlisting a Bot
jsx
Copy
const enlistBot = (bot) => {
  if (!army.some((b) => b.id === bot.id)) {
    setArmy([...army, bot]);
  }
};
Releasing a Bot
jsx
Copy
const releaseBot = (botId) => {
  setArmy(army.filter((bot) => bot.id !== botId));
};
Discharging a Bot
jsx
Copy
const dischargeBot = (botId) => {
  fetch(`https://bots-si0g.onrender.com/bots/${botId}`, {
    method: "DELETE",
  }).then(() => {
    setArmy(army.filter((bot) => bot.id !== botId));
    setBots(bots.filter((bot) => bot.id !== botId));
  });
};
## Styling
The application is styled using CSS. The index.css file contains styles for the bot collection, bot army, and bot specifications.

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.