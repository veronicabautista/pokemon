import React from "react";

class PokemonCard extends React.Component {
  render() {

    const newPokemon = this.props.detail;

    return (
      <div className="pokemon__card">
        <div className="pokemon__image">
          <img className="pokemon__image" src={newPokemon.sprites.front_default} alt="pokemon"/>
        </div>
        <p className="pokemonlist__id">ID/{newPokemon.id}</p>
        <div>
				  <p className="pokemonlist__name">{newPokemon.name}</p>
          <ul className="pokemon__attack--type">{newPokemon.types.map(attack => {
            return <li className="pokemon__attack">{attack.type.name}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonCard;