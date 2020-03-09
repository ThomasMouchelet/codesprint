import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Pokemon extends React.Component {

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
        let linkUrl = this.state.front
        return (
            <View>
                <Image
                    source={{ url: linkUrl }}
                    style={{ width: 200, height: 200 }}
                />
                <Text style={styles.name}>{this.state.pokemon.name}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    name: {
        margin: 20,
    },
})