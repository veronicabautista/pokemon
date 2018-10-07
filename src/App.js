import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';

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
    for (let i = 1; i < 26; i++) {
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
        <PokemonList 
            pokemons={this.state.pokemons}
            pokemonName={this.state.pokemonName} />
        <Footer />
      </div>
    );
  }
}

export default App;