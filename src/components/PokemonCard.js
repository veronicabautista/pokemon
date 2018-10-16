import React from "react";

class PokemonCard extends React.Component {
  render() {

    return (
      <div className="pokemon__card">
        <div className="pokemon__image">
          <img className="pokemon__picture" src={this.props.card.image} alt="pokemon" />
          <span className="pokemon__id--container">
            <p className="pokemon__id">id / {this.props.card.id}</p>
          </span>
        </div>
        <div className="pokemon__info">
          <p className="pokemon__name">{this.props.card.name}</p>
          <ul className="pokemon__attack--type">{this.props.card.types.map((type,index) => {
            return <li key={index} className={`pokemon__attack type--${type.toUpperCase()}`}>{type}</li>
          })}
          </ul>
          <p className="pokemonItem__containerData__evolve">Evoluciona de: {this.props.card.evolve_from_specie}</p>
        </div>
      </div>
    );
  }
}

export default PokemonCard;