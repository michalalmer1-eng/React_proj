import { useState } from "react";
import "../css/Main.css"; // קובץ עיצוב נפרד
function Main() {
  const moods = [
    { name: "Happy", emoji: "😁" },
    { name: "Sad", emoji: "😟" },
    { name: "Angry", emoji: "😡" },
  ];

  const [currentMood, setCurrentMood] = useState({ name: "Neutral", emoji: "😐" });
  const [count, setCount] = useState({ Happy: 0, Sad: 0, Angry: 0 });
  const [history, setHistory] = useState([]);

  const handleClick = (mood) => {
    setCount((prev) => ({ ...prev, [mood.name]: prev[mood.name] + 1 }));
    setCurrentMood(mood);
    setHistory((prev) => [mood, ...prev].slice(0, 3));
  };

  const handleReset = () => {
    setCount({ Happy: 0, Sad: 0, Angry: 0 });
    setCurrentMood({ name: "Neutral", emoji: "😐" });
    setHistory([]);
  };

  const handleRandom = () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    handleClick(randomMood);
  };

  return (
    <main className="container">
      <div className="card">
        <h2>Current Mood:</h2>
        <p className="current">{currentMood.name} {currentMood.emoji}</p>
      </div>

      <div className="mood-buttons">
        {moods.map((mood) => (
          <div key={mood.name} className="mood-item">
            <button onClick={() => handleClick(mood)}>
              {mood.name} {mood.emoji}
            </button>
            <p>{count[mood.name]}</p>
          </div>
        ))}
      </div>

      <div className="actions">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleRandom}>Random Mood</button>
      </div>

      <div className="card">
        <h3>Mood History:</h3>
        <ul>
          {history.map((m, index) => (
            <li key={index}>
              {m.name} {m.emoji} 
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
