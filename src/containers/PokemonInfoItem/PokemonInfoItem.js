import React from 'react';

import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';

const PokemonInfoItem = ({label, value}) => (
  <ListItem>
    <ListItemText primary={label} />
    <ListItemSecondaryAction>
      <Typography>{value}</Typography> 
    </ListItemSecondaryAction>
  </ListItem>
);

export default PokemonInfoItem;