import React from "react";
import { useQuery } from "react-query";
import Character from "./Character";

export default function Characters() {
  const url = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = async () => {
    const response = await fetch(url);
    return response.json();
  };
  const { data, status } = useQuery("characters", fetchCharacters);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  } else {
    return (
      <div className="characters">
        {data.results.map((character) => (
          <Character character={character} />
        ))}
      </div>
    );
  }
}
