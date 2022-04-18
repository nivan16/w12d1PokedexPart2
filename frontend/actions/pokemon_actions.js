import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";

export const receiveAllPokemon = (data) => ({
  type: RECEIVE_ALL_POKEMON,
  data
})

export const recieveOnePokemon = (data) => ({
  type: RECEIVE_ONE_POKEMON,
  data
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestOnePokemon = (pokeId) => (dispatch) => (
  APIUtil.fetchOnePokemon(pokeId)
    .then((pokemon) => {
      return dispatch(recieveOnePokemon(pokemon))})
)



