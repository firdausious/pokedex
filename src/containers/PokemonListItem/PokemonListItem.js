import React from 'react';

import {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import { getPokemonId } from '../../helpers/utils';

const PokemonListItem = ({ pokemon, onChoose }) => (
  <ListItem key={pokemon.name}
    button onClick={() => onChoose(getPokemonId(pokemon.url))}>
    <Avatar src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`} />
    <ListItemText primary={pokemon.name} />
  </ListItem>
);

export default PokemonListItem;