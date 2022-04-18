import { connect } from 'react-redux';
import { requestOnePokemon } from './../../actions/pokemon_actions';
import { selectOnePokemon } from './../../reducers/selectors';
import PokemonDetail from "./pokemon_detail"; 

//item logic?
const mapStateToProps = state => ({
  pokemon: selectOnePokemon(state)
})

//itemlogic?
const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => {
    return dispatch(requestOnePokemon(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);