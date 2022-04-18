import React from "react";

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestOnePokemon()
  }

  render(){

  }



}