import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Summary({ character }) {
  const { id } = useParams();
  const [summary, setSummary] = useState([]);
  let url = `https://api.tvmaze.com/singlesearch/shows?q=${id}`;

  useEffect(() => {
    let mounted = true;
    axios.get(url).then((data) => {
      if (mounted) {
        setSummary(data);
        console.log(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="border shadow-md">
      {/* <img src={character.image} alt="" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">
          {character.status} - {character.species}
        </p>
        <p className="title">Last seen on</p>
        <p>{character.location.name}</p>
      </div> */}
    </div>
  );
}
