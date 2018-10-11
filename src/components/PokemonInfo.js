import React from "react";

class PokemonCard extends React.Component {
  render() {

    return (
      <div>{JSON.stringify(this.props)}</div>
      // <div className="pokemon__card">
      // <ul>
      //   <li className="pokemon__image">
      //     <img className="pokemon__picture" src={this.props.image} alt="pokemon" />
      //     <span className="pokemon__id--container">
      //       <p className="pokemon__id">id / {this.props.id}</p>
      //     </span>
      //     <p className="pokemon__name">{this.props.name}</p>
      //     {/* <ul className="pokemon__attack--type">{this.props.types.map((type,index) => {
      //       return <li key={index} className={`pokemon__attack type--${type.toUpperCase()}`}>{type}</li>
      //     })}
      //     </ul> */}
      //   </li>
      //   </ul>
      // </div>
    )
}}

export default PokemonCard;