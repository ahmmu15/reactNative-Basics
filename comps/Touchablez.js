import React, {Component} from 'react'
import {Alert, Text, TouchableHighlight, View} from 'react-native'

let comp = Component

class Touchablez extends comp {
    _onPress() {
        Alert.alert('Fuck You!')
    }

    _onLongPress() {
        Alert.alert('Fuuuuuuuck You!')
    }

    render() {
        return(
            <View>
                <TouchableHighlight onPress={this._onPress} underlyColor='white' style={{marginBottom: 90}}>
                    <View>
                        <Text>Normal Press!</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onLongPress={this._onLongPress} underlyColor='white'>
                    <View>
                        <Text>Long Press!</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Touchablez