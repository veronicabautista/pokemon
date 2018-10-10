import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import PokemonList from './components/PokemonList';
// import PokemonInfo from './components/PokemonInfo';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      pokemonName: "",
    }

  this.searchPokemon = this.searchPokemon.bind(this);
  }

  componentDidMount () {
    const pokedex = [];
    for (let i = 1; i < 4; i++) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/')
        .then(response => {
          return response.json();
        })
        .then(info => {
          pokedex.push(info)
          this.setState({ pokemons: [...pokedex ] });
          console.log(this.state.pokemons);
        })
    }
  }

  searchPokemon(event) {
    const myPoke = event.currentTarget.value;
    this.setState({
      pokemonName: myPoke
    });
  }

  render() {
    return (
      <div className="pokedex__main">
        <Header />
        <Filter
            searchPokemon={this.searchPokemon} 
            pokemons={this.state.pokemons}
            pokemonName={this.state.pokemonName} />
        <Switch>
         <Route exact path="/" render={ () =>
          <PokemonList 
            pokemons={this.state.pokemons}
         pokemonName={this.state.pokemonName} /> }/>
         {/* <Route path="/PokemonInfo/:id" render={(props) => <PokemonInfo
          pokemons={this.state.pokemons}
        pokemonName={this.state.pokemonName} /> }/> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;