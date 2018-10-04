import React, { Component } from 'react';
import Filter from './components/Filter';

const callApi = "https://pokeapi.co/api/v2/pokemon/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      name: "",
      info: ""
    }

   this.searchPokemon = this.searchPokemon.bind(this);
  }

  componentDidMount () {
    this.fetchPokemonList()
  }

  fetchPokemonList (){
    fetch (callApi)
    .then((response) => response.json())
    .then(data => {
      this.setState({
        pokemons: data
      });
    });
  }

  searchPokemon(event) {
    const myPoke = event.currentTarget.value;

    this.setState({
      name: myPoke
    });
  }

  render() {
    return (
      <div className="kanto_card">
        <h1 className="title">Pokédex Kanto</h1>
        <Filter
            searchPokemon={this.searchPokemon} />

        {/* <PokemonList pokemonKanto={this.props.pokedex} pokeName={this.state.name}/> */}
      </div>

    );
  }
}

export default App;
