import React from "react";

class PokemonCard extends React.Component {
  evolution(evolve_from_specie){
    if (evolve_from_specie === null) {
      return <p className="pokemon__evolve" > </p>

    } else {
      return <p className="evolve-card" >Evolves from: {evolve_from_specie}</p>
    }
  }
  render() {
    const{name, id, sprites, types, evolve_from_specie }= this.props.card ;
    return (
      <div className="pokemon__card">
        <div className="pokemon__image">
          <img className="pokemon__picture" src={sprites.front_default} alt="pokemon" />
          <span className="pokemon__id--container">
            <p className="pokemon__id">id / {id}</p>
          </span>
        </div>
        <div className="pokemon__info">
          <p className="pokemon__name">{name}</p>
          <ul className="pokemon__attack--type">{types.map(attack => {
            return <li className="pokemon__attack">{attack.type.name}</li>
            })}
          </ul>
         {this.evolution(evolve_from_specie)}
        </div>
      </div>
    );
  }
}

export default PokemonCard;