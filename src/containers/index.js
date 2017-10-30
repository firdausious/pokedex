/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Input from 'material-ui/Input';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

import withRoot from '../components/withRoot';

import PokemonDetail from './PokemonDetail/PokemonDetail';
import PokemonListItem from './PokemonListItem/PokemonListItem';

import styles from './indexStyles';

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
          {/* List without filter */}
          {!filteredAbility &&
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadList}
                hasMore={!!pokemonNextList}
                loader={<CircularProgress />}>
              {pokemonList.length > 0 &&
                <List>
                  {pokemonList.map(pokemon =>
                    <PokemonListItem
                      key={pokemon.name}
                      pokemon={pokemon}
                      onChoose={this.handleDetail}
                    />
                  )}
                </List>
              }
              {pokemonList.length === 0 && <div>No pokemon</div>}
            </InfiniteScroll>
          }

          {/* List with filter */}
          {filteredAbility && pokemonList.length > 0 &&
            <div>
              <div>Ability: <strong>{pokemonFilteredAbility}</strong></div>
              <List>
                {pokemonList.map(pokemon =>
                  <PokemonListItem
                    key={pokemon.pokemon.name}
                    pokemon={pokemon.pokemon}
                    onChoose={this.handleDetail}
                  />
                )}
              </List>
            </div>
          }

          {/* Detail */}
          <PokemonDetail
            open={this.state.open}
            close={this.handleRequestClose}
            pokemonDetail={pokemonDetail}
            classes={classes}
          />

        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
