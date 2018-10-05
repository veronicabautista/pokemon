import React, { Component } from 'react';
import Filter from './components/Filter';
import PokemonList from './components/PokemonList'

// const callApi = "https://pokeapi.co/api/v2/pokemon/";

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
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/?limit=25')
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
      console.log("pokemonURL " + pokemon.url)
      fetch(pokemon.url)
      .then(response => {
        return response.json();
      })
      .then(info => {
        console.log("pokemonData " + info)
        pokemonDetail.push(info);
        this.setState({
          pokemons: pokemonDetail
        })
      });
      console.log("arrayPokemonsData" + pokemonDetail)
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
      <div className="kanto_card">
        <h1 className="title">Pokédex Kanto</h1>
        <Filter
            searchPokemon={this.searchPokemon} 
            pokemons={this.state.pokemons}
            pokemonName={this.state.pokemonName} />
        <PokemonList 
            pokemons={this.state.pokemons}
            pokemonName={this.state.pokemonName} />
      </div>

    );
  }
}

export default App;
