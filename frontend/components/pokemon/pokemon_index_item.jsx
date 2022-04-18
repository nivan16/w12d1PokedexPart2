import React from "react";
import {Link} from "react-router-dom";

const PokemonIndexItem = (props) => {
  return (
    <li className="pokemon-index-item">
      <Link to={`/pokemon/${props.poke.id}`}>
        <span>{props.poke.id}</span>
        <img src={props.poke.imageUrl} />
        <span>{props.poke.name}</span>
      </Link>
    </li>
  )
}


export default PokemonIndexItem;