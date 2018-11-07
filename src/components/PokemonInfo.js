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
        <div className="pokemon__info--picture">
          <img  src={sprites.front_default} alt="pokemon" />
        </div>
        <ul className="pokemon__info--attack--type">{types.map((attack, i) => {
          return <li className={`pokemon__attack type--${types[i].type.name.toLowerCase()}`} key={i}>{attack.type.name}</li>
          })}
        </ul>
        <div className="pokemon__info--details">
          <p className="pokemon__height">Height: {height} cm</p>
          <p className="pokemon__weight">Weight: {weight} g</p>
          <ul className="pokemon__info--abilities">
            <p>Abilities:</p>
            {abilities
              .map((items) => {
                return (<li className="pokemon__abilities">{items.ability.name}</li>)
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
        </div>
      </div>
    )
}}}

export default PokemonInfo;