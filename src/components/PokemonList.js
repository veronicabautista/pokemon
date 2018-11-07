import React from "react";
import PokemonCard from "./PokemonCard";
import { Link } from 'react-router-dom';

class PokemonList extends React.Component {
	render() {
		return (
			<div className="pokedex__container">
				<ul className="pokemonlist">
					{this.props.pokemons
						.sort((a, b) => a.id - b.id)
						.filter(search => {
							return search.name.toLocaleLowerCase().includes(this.props.pokemonName.toLocaleLowerCase());
						})
						.map((card => {
							return (
								<Link to={`/PokemonInfo/${card.id}`}>
								<li className="pokemonlist__card" key={card.id}>
									<PokemonCard 
										card={card}
										/>
								</li>
								</Link>
							)}
						))
					}
				</ul>
			</div>
		);
	}
}

export default PokemonList;