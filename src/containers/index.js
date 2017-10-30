/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
} from 'material-ui/Dialog';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';
import { CircularProgress } from 'material-ui/Progress';
import Slide from 'material-ui/transitions/Slide';
import { withStyles } from 'material-ui/styles';

import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

import withRoot from '../components/withRoot';
import { getPokemonId } from '../helpers/utils';

const styles = {
  root: {
    maxWidth: 504,
    margin: '0 auto',
    position: 'relative'
  },
  header: {
    maxWidth: 504,
  },
  listContainer: {
    height: 700,
    overflow: 'auto'
  },
  detailContent: {
    paddingTop: 64,
  }
};

const PokemonInfoItem = ({label, value}) => {
  return (
  <ListItem>
    <ListItemText primary={label} />
    <ListItemSecondaryAction>
      <Typography>{value}</Typography> 
    </ListItemSecondaryAction>
  </ListItem>
  );
};

class Index extends Component {
  state = {
    open: false,
    pokemonList: [],
    pokemonNextList: null,
    pokemonDetail: {},
    filteredAbility: null,
  };

  componentDidMount = () => {
    this.loadList();
  }

  
  loadList = () => {
    const { pokemonList, pokemonNextList } = this.state;

    const endpoint = pokemonNextList ? pokemonNextList
    :
    'http://pokeapi.salestock.net/api/v2/pokemon/';

    axios.get(endpoint)
      .then(response => {
        this.setState({
          pokemonList: [...pokemonList, ...response.data.results],
          pokemonNextList: response.data.next
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadListByAbility = (event, value) => {
    this.setState({
      pokemonList: [],
      filteredAbility: 1
    });

    axios.get(`http://pokeapi.salestock.net/api/v2/ability/1`)
      .then(response => {
        this.setState({
          pokemonFilteredAbility: response.data.name,
          pokemonList: response.data.pokemon,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
      pokemonDetail: {}
    });
  };

  handleDetail = pokemonId => {
    this.setState({
      open: true,
    });

    axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/${pokemonId}/`)
    .then(response => {
      this.setState({
        pokemonDetail: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    const { classes } = this.props;
    const {
      pokemonList,
      pokemonNextList,
      pokemonDetail,
      pokemonFilteredAbility,
      filteredAbility
    } = this.state;

    return (
      <div className={classes.root}>
        <div>
          {/* Header */}
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography type="title" color="inherit">
                Pokedex
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Panel search */}
          <Input
            id="searchName"
            ref="searchName"
            placeholder="Search by Ability ID (eg: 1)"
            onChange={this.loadListByAbility}
            fullWidth
          />

        </div>

        <br />

        <div>
          {/* List */}
          {!filteredAbility &&
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadList}
                hasMore={!!pokemonNextList}
                loader={<CircularProgress />}>
              {pokemonList.length > 0 &&
                <List>
                  {pokemonList.map(pokemon =>
                    <ListItem key={pokemon.name}
                      button onClick={() => this.handleDetail(getPokemonId(pokemon.url))}>
                      <Avatar src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`} />
                      <ListItemText primary={pokemon.name} />
                    </ListItem>)}
                </List>
              }
              {pokemonList.length === 0 && <div>No pokemon</div>}
            </InfiniteScroll>
          }

          {filteredAbility && pokemonList.length > 0 &&
            <div>
              <div>Ability: <strong>{pokemonFilteredAbility}</strong></div>
              <List>
                {pokemonList.map(pokemon =>
                  <ListItem key={pokemon.pokemon.name}
                    button onClick={() => this.handleDetail(getPokemonId(pokemon.pokemon.url))}>
                    <Avatar src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.pokemon.url)}.png`} />
                    <ListItemText primary={pokemon.pokemon.name} />
                  </ListItem>)}
              </List>
            </div>
          }

          {/* Detail */}
          <Dialog fullScreen open={this.state.open} onRequestClose={this.handleRequestClose} transition={<Slide direction="up" />}>
            <DialogTitle>
              <AppBar>
                <Toolbar>
                  <Typography type="title" color="inherit">
                    {pokemonDetail.name || '-'}
                  </Typography>
                  <Button color="contrast" onClick={this.handleRequestClose}>
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
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
