import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

export default function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };
  const { data, isPreviousData, isLoading, error } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }
  if (error) {
    return <div>An error occured: {error.message}</div>;
  } else {
    return (
      <div>
        <h1>Rick and morty</h1>
        <div className="characters">
          {data?.results.map((character) => (
            <Character character={character} />
          ))}
          <div>
            <button
              disabled={page === 1}
              onClick={() => setPage((old) => old - 1)}
            >
              Previous
            </button>
            <button
              disabled={!data.info.next && isPreviousData}
              onClick={() => setPage((old) => old + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
