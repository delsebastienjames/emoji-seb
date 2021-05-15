import "./index.css";
import "./App.css";

import emojiList from "./emojiList.json";
import { useState } from "react";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Line from "./components/Line";

function App() {
  const [results, setResults] = useState(emojiList.slice(0, 19));

  const handleSearch = (event) => {
    // console.log(event.target.value);
    // chercher dans le tableau emojiList
    // filter()
    const newResults = [];
    for (let i = 0; i < emojiList.length; i++) {
      if (
        emojiList[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1
      ) {
        if (newResults.length <= 19) {
          newResults.push(emojiList[i]);
        } else {
          break; // sortir de la boucle
        }
      }
    }
    setResults(newResults);
  };

  return (
    <div className="container">
      <span className="search">
        <Search handleSearch={handleSearch} />
      </span>
      <div className="emoji">
        <div className="air">
          {results.map((emoji, index) => {
            return <Line key={index} emoji={emoji} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
