import React, { useEffect, useState } from "react";

export default function Characters() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
  };
  useEffect(() => {
    fetchCharacters();
  }, []);
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}
