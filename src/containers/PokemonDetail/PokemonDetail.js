import React from 'react';

import Dialog, {
  DialogTitle,
  DialogContent,
} from 'material-ui/Dialog';
import List, {
  ListSubheader,
} from 'material-ui/List';
import Slide from 'material-ui/transitions/Slide';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import PokemonInfoItem from '../PokemonInfoItem/PokemonInfoItem';

const PokemonDetail = ({ open, close, pokemonDetail, classes}) => (
  <Dialog fullScreen open={open} onRequestClose={close} transition={<Slide direction="up" />}>
    <DialogTitle>
      <AppBar>
        <Toolbar>
          <Typography type="title" color="inherit">
            {pokemonDetail.name || '-'}
          </Typography>
          <Button color="contrast" onClick={close}>
            Close
          </Button>
        </Toolbar>
      </AppBar>
    </DialogTitle>
    <DialogContent className={classes.detailContent}>

      {/* Sprites */}
      {pokemonDetail.sprites && <div>
        {Object.entries(pokemonDetail.sprites).map(sprite =>
          <img key={sprite[0]} src={sprite[1]} alt="" />
        )}
      </div>}

      {/* Info */}
      <List subheader={<ListSubheader>info</ListSubheader>}>
        <PokemonInfoItem label="base Experience" value={pokemonDetail.base_experience || '-'} />
        <PokemonInfoItem label="weight" value={pokemonDetail.weight || '-'} />
        <PokemonInfoItem label="height" value={pokemonDetail.height || '-'} />
      </List>

      <br />

      {/* Stats */}
      {pokemonDetail.stats &&
        <List subheader={<ListSubheader>stats</ListSubheader>}>
          {pokemonDetail.stats.map(stat =>
            <PokemonInfoItem
              key={`stats-${stat.stat.name}`}
              label={stat.stat.name}
              value={stat.base_stat}
            />
          )}
        </List>
      }
    </DialogContent>
  </Dialog>
);

export default PokemonDetail;