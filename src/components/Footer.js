import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="pokedex__footer">
        <span className="footer--text">
          <p>Made with <a href="https://pokeapi.co/">PokeApi</a>.
          Pokémon and Pokémon character names are trademarks of Nintendo.</p>
        </span>
      </div>
    );
  }
}
export default Footer;