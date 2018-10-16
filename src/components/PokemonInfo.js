import React from "react";

class PokemonInfo extends React.Component {
  render() {
    // console.log(JSON.stringify(this.props));
    const { name, sprites, height, weight, types, abilities} = this.props.pokemons[this.props.match.params.id -1];
    console.log(types);
    if (this.props.pokemons.length === 0) {
      console.log("devuelvo nulo");
      return null;
    } else {
    return (
      <div className="pokemon__card">
      <p className="pokemon__name">{name}</p>
        <div className="pokemon__image">
          <img className="pokemon__picture" src={sprites.front_default} alt="pokemon" />
          <ul className="pokemon__attack--type">{
            
            types
            .map((attack, index) => {

            return <li key={index} className="pokemon__attack">{attack.type.name}</li>
          })}
          </ul>
          <span className="pokemon__id--container">
            <p className="pokemon__height">Height: {height}</p>
            <p className="pokemon__weight">Weight: {weight}</p>
          
          <ul className>
                <p>Abilities:</p>
                {abilities
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