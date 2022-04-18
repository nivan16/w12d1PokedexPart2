import { Route } from "react-router-dom";
import React from "react";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetailContainer from "./pokemon/pokemon_detail_container";
import { Switch } from "react-router-dom";


const App = () => (
    <Switch>   
        <Route path="/api/pokemon/:id" component={PokemonDetailContainer}  />
        <Route path="/" component={PokemonIndexContainer}/>
    </Switch>
);

export default App;