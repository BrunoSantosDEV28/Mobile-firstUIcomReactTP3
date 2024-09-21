import React, { useState } from "react";
import "./styles.css";

const TourismApp = () => {
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const places = [
    { name: "Ponto 1", value: 10 },
    // Adicione mais pontos turísticos
  ];

  const addPlace = (place) => {
    setSelectedPlaces([...selectedPlaces, place]);
  };

  return (
    <div className="tourism-app">
      <h1>Pontos Turísticos</h1>
      {places.map((place, index) => (
        <div key={index}>
          <h2>{place.name}</h2>
          <p>Valor: R${place.value}</p>
          <button onClick={() => addPlace(place)}>Adicionar</button>
        </div>
      ))}
      <h2>Selecionados:</h2>
      <ul>
        {selectedPlaces.map((place, index) => (
          <li key={index}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TourismApp;
