import { useHistory, useParams } from "react-router-dom";

export default function Summary({ character }) {
  return (
    <div className="border shadow-md" key={character.id}>
      <img src={character.image} alt="" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">
          {character.status} - {character.species}
        </p>
        <p className="title">Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
}
