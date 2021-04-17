import React, { useState } from 'react';

function Pokedex(props) {
    // pokemon - data, setPokemon - setter
    const [pokemon, setPokemon] = useState(''); // equivalent to pokemon: '' in constructor

    return (
        <h1>This is the Pokedex</h1>
    )
}

export default Pokedex;