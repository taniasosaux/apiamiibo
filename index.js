import React from "react";
import ReactDom from "react-dom";

import "./styles.css";
//import data from './data.json';
import logo from "./images/logo.png";

function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class App extends React.Component {
  state = {
    data: {
      results: []
    }
  };

  ComponentDidMount() {
    this.fetchCharacters();
  }
  fetchCharacters = async () => {
    const response = await fetch("https://www.amiiboapi.com/api/");
    const data = await response.json();

    this.setState({
      data: data
    });
  };

  render() {
    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="amiibo" />

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
