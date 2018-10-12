import React, {Component} from 'react'
import {Text, View} from 'react-native'


let comp = Component

class Greeting extends comp {
    render() {
        return(
            <Text>{this.props.name}</Text>
        )
    }
}

class LotsOfThings extends comp {
    render() {
        return(
            <View>
                <Greeting name="Demo" />
                <Greeting name="Lemo" />
                <Greeting name="Bla" />
                <Greeting name="Home" />
                <Greeting name="Vark" />
            </View>
        )
    }
}

export default LotsOfThings