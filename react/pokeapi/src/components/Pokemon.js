import React from 'react';

class Pokemon extends React.Component {

    state = {
        pokemon: {},
        front: ""
    }

    componentDidMount() {
        fetch(this.props.details.url)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    pokemon: result,
                    front: result.sprites.front_default
                })
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.front} alt="" />
                {this.state.pokemon.name}
            </div>
        )
    }

}

export default Pokemon;