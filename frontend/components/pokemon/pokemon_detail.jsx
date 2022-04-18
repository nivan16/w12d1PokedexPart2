import React from "react";

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.requestOnePokemon(this.props.match.params.id);

  }

  render(){
    if(this.props.pokemon.length > 0){
      debugger;
      return (
        <ul>
          <ul>
          <h1>{this.props.pokemon.name}</h1>
          {Object.values(this.props.pokemon).map((data) => {
            return <li>{data}</li>
          })}
    
  
          </ul>

        </ul>
      )
    }
    else{
      return <h1>Pokemon Is Loading!</h1> 
    }
  }



}
export default PokemonDetail;