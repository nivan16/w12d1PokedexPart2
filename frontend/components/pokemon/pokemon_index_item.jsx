import React from "react";

const PokemonIndexItem = (props) => {
  debugger;
  return (<li className="pokemon-index-item">
    <span>{props.poke.id}</span>
    <img src={props.poke.imageUrl} />
    <span>{props.poke.name}</span>
  </li>)
}


export default PokemonIndexItem;