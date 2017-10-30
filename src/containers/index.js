/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import Slide from 'material-ui/transitions/Slide';

import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

const styles = {
  root: {
    maxWidth: 504,
    margin: '0 auto',
    position: 'relative'
  },
  header: {
    maxWidth: 504,
  },
  detailContent: {
    paddingTop: 64,
  }
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography type="title" color="inherit">
                Pokedex
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <br />

        <div>
          <List>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Photos" secondary="Jan 9, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <Avatar src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>
          </List>

          <Dialog fullScreen open={this.state.open} onRequestClose={this.handleRequestClose} transition={<Slide direction="up" />}>
            <DialogTitle>
              <AppBar>
                <Toolbar>
                  <Typography type="title" color="inherit">
                    Bulbasaur
                  </Typography>
                  <Button color="contrast" onClick={this.handleRequestClose}>
                    Close
                  </Button>
                </Toolbar>
              </AppBar>
            </DialogTitle>
            <DialogContent className={classes.detailContent}>

              {/* Info */}
              <List subheader={<ListSubheader>Info</ListSubheader>}>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
              </List>

              {/* detail */}
              <List subheader={<ListSubheader>Detail</ListSubheader>}>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
              </List>

              {/* Spec */}
              <List subheader={<ListSubheader>Spec</ListSubheader>}>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Name" />
                  <ListItemSecondaryAction>
                    <Typography>Bulbasaur</Typography> 
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
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
