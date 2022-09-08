import React from "react";
import { useQuery } from "react-query";

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
      <div>
        {data.results.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </div>
    );
  }
}
