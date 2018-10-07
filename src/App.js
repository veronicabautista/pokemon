import React, { Component } from 'react';
import './App.css';
import logo from "./images/logo.png";
import Filter from './components/Filter';
import PokemonList from './components/PokemonList'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      pokemonName: "",
    }

  this.searchPokemon = this.searchPokemon.bind(this);
  this.fetchPokemonList = this.fetchPokemonList.bind(this);
  }

  componentDidMount () {
    this.fetchPokemonList()
  }

  fetchPokemonList (){
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/?limit=25' )
    .then(response => {
      return response.json();
    })
    .then(data=> {
      this.details(data.results);
      })
  }

  details(data){
    let pokemonDetail=[];
    data.forEach(pokemon => {
      fetch(pokemon.url)
      .then(response => {
        return response.json();
      })
      .then(info => {
        pokemonDetail.push(info);
        this.setState({
          pokemons: pokemonDetail
        })
      });
    });
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
        <div className="pokedex__tittle">
          <img className="title" src={logo} alt="logo"/>
        </div>
        <Filter
            searchPokemon={this.searchPokemon} 
            pokemons={this.state.pokemons}
            pokemonName={this.state.pokemonName} />
        <PokemonList 
            pokemons={this.state.pokemons}
            pokemonName={this.state.pokemonName} />
        <div className="pokedex__footer">
          <span>
            <p>Made with <a href="https://pokeapi.co/">PokeApi</a>.
            Pokémon and Pokémon character names are trademarks of Nintendo.</p>
          </span>
        </div>
      </div>
    );
  }
}

export default App;