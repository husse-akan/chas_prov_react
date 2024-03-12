// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import React, { useState } from "react";

const HobbyList = () => {
  const [hobbies, setHobbies] = useState([]);
  const [newHobby, setNewHobby] = useState("");

  const addHobby = () => {
    if (newHobby.trim() !== "") {
      setHobbies([...hobbies, newHobby]);
      setNewHobby("");
    }
  };

  const deleteHobby = (index) => {
    const newHobbies = [...hobbies];
    newHobbies.splice(index, 1);
    setHobbies(newHobbies);
  };

  return (
    <div>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
            <button onClick={() => deleteHobby(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
        />
        <button onClick={addHobby}>Add</button>
      </div>
    </div>
  );
};

export default HobbyList;
