import React from "react";
import PokemonCard from "./PokemonCard";

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
						.map((card => {
							return (
								<li className="pokemonlist__card" key={card.id}>
                	<PokemonCard detail={card}/>				 
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