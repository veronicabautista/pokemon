import React from "react";

class PokemonInfo extends React.Component {
  render() {

    return (
      <div className="pokemon__card">
        <div className="pokemon__image">
          <img className="pokemon__picture" src={this.props.image} alt="pokemon" />
          <span className="pokemon__id--container">
            <p className="pokemon__id">id / {this.props.id}</p>
          </span>
        </div>
        <div className="pokemon__info">
          <p className="pokemon__name">{this.props.name}</p>
          <ul className="pokemon__attack--type">{this.props.types.map((type,index) => {
            return <li key={index} className={`pokemon__attack type--${type.toUpperCase()}`}>{type}</li>
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonInfo;