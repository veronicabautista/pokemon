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
      <div className="pokemon__info--card">
      <p className="pokemon__info--name">{name}</p>
          <img className="pokemon__info--picture" src={sprites.front_default} alt="pokemon" />
          <ul className="pokemon__info--attack--type">{types.map((attack, i) => {
            return <li className={`pokemon__attack type--${types[i].type.name.toLowerCase()}`} key={i}>{attack.type.name}</li>
            })}
          </ul>
          {/* <span className="pokemon__id--container"> */}
            <p className="pokemon__height">Height: {height} cm</p>
            <p className="pokemon__weight">Weight: {weight} g</p>
          
          <ul className="pokemon__abilities">
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
          {/* </span> */}
      </div>
    )
}}}

export default PokemonInfo;