import React from "react";

class PokemonList extends React.Component {
  render() {

    return (
        <div>
				  <ul className="pokemonlist">
					{this.props.pokemons
						.sort((a, b) => a.id - b.id)
						.filter(search => {
							return search.name.toLocaleLowerCase().includes(this.props.pokemonName.toLocaleLowerCase());
						})
						.map((poke => {
							return (
								<li className="pokemonlist__card" key={poke.name}>
                <img className="pokemonlist__image" src={poke.sprites.front_default} alt="pokemon"/>
                <p className="pokemonlist__id">{poke.id}</p>
								<p className="pokemonlist__name">{poke.name}</p>					 
								</li>
							)
						}))
					}

          </ul>
		</div>
    );

  }
}

export default PokemonList;