import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
      <input type="text" placeholder="Filtra pokemons por nombre" name={this.props.name} onChange={this.props.searchPokemon}/>
    </div>
    );
  }
}

export default Filter;