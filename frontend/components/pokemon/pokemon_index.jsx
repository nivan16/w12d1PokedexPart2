import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import ReactDOM from "react-dom";

class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
    this.props.requestAllPokemon()
  }
  
  render(){
    return (
    <section className="pokedex">
      <ul>
      {this.props.pokemon.map( (poke) => {
        return(
        <PokemonIndexItem key={poke.id} poke={ poke } />
        )
    })}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;