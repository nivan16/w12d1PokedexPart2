import { Route } from "react-router-dom";
import React from "react";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetail from "./pokemon/pokemon_detail";

const App = () => (
    <div>
        <Route path="/" component={PokemonIndexContainer}/>
        <Route path="/pokemon/:id" component={PokemonDetail}  />
    </div>
);

export default App;