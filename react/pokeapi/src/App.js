import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon'

class App extends React.Component {

  state = {
    pokemons: {}
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(result => {
        let pokemons = result.results
        this.setState({
          pokemons
        })
      })
  }

  render() {
    const pokemons = Object
      .keys(this.state.pokemons)
      .map(key => <Pokemon key={key} details={this.state.pokemons[key]} />)

    return (
      <div className="App">
        <h1>Poke api</h1>
        {pokemons}
      </div>
    )
  }

}

export default App;
