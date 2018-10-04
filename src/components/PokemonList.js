import React from "react";

class PokemonList extends React.Component {
  render() {

    return (
        <div>
				  <ul className="container__list">
					{this.props.pokemons
						.filter(search => {
							return search.name.toLocaleLowerCase().includes(this.props.name.toLocaleLowerCase());
						})
						.map((item => {
							return (
								<li className="pokemon__card">{item.name}</li>
							);
						}))
					}
          </ul>
		</div>
    );

  }
}

export default PokemonList;