import React from "react";

class PokemonInfo extends React.Component {
  render() {
    if (this.props.pokemons.length === 0) {
      return null;
    } else {
    return (
      <div className="pokemon__card">
      <p className="pokemon__name">{this.props.name}</p>
        <div className="pokemon__image">
          <img className="pokemon__picture" src={this.props.image} alt="pokemon" />
          <ul className="pokemon__attack--type">{this.props.pokemons[Number(this.props.match.params.id)-1].types
            .map((type,index) => {
            return <li key={index} className="pokemon__attack">{type}</li>
          })}
          </ul>
          <span className="pokemon__id--container">
            <p className="pokemon__height">Height: {this.props.pokemons[Number(this.props.match.params.id)-1].height} m</p>
            <p className="pokemon__weight">Weight: {this.props.pokemons[Number(this.props.match.params.id)-1].weight}00 g</p>
          
          <ul className>
                <p>Abilities:</p>
                {this.props.pokemons[Number(this.props.match.params.id)-1].abilities
                  .map((items) => {
                    return (<li className>{items.ability.name}</li>)
                  })
                }
          </ul>
          {/* <div>
              <h2 className>Evolutions</h2>
              <ul className>
                  {evolutions.map(evolution => {
                      return (
                          <p className>{evolution}</p>
                      );
                  })}
              </ul>
          </div> */}
          </span>
          
        </div>
      </div>
    )
}}}

export default PokemonInfo;