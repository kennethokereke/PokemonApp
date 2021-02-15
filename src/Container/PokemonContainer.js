import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_POKEMON} from '../graphql/get-pokemons'
import Pokemon from '../Components/Pokemon';

export const PokemonsContanier = () => {
    const {data: {pokemons = [] } = {}} = useQuery(GET_POKEMON, {
        variables: {first: 9},
    })

    return (
        <div className="pokemon">
            {/* JSON.stringify(name) is concerting API to JSON */}
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    )

}

export default PokemonsContanier
