import React, {Component} from 'react'
import {Alert, Button, StyleSheet, View} from 'react-native'

let comp = Component

class Buttonz extends comp {
    _onPressButton() {
        Alert.alert('Fuck You!')
    }

    render() {
        return(
            <View>
                <Button 
                onPress={this._onPressButton}
                title='Press Me'
                color='red' />
            </View>
        )
    }
}

export default Buttonz