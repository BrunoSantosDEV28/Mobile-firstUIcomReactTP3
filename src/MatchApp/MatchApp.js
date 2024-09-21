import React, { useState } from "react";
import "./styles.css";

const MatchApp = () => {
  const [likes, setLikes] = useState([]);
  const items = ["Item 1", "Item 2", "Item 3"];

  const handleLike = (item) => {
    setLikes([...likes, item]);
  };

  return (
    <div className="match-app">
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item}</h3>
          <button onClick={() => handleLike(item)}>Gosto</button>
          <button onClick={() => setLikes(likes.filter((i) => i !== item))}>
            Não Gosto
          </button>
        </div>
      ))}
      <div>
        <h2>Itens que você gostou:</h2>
        <ul>
          {likes.map((like, index) => (
            <li key={index}>{like}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchApp;
