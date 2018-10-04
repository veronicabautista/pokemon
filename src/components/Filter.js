import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
      <input type="text" placeholder="Enter the name" name={this.props.name} onChange={this.props.searchPokemon}/>
    </div>
    );
  }
}

export default Filter;