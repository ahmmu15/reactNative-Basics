import React, {Component} from 'react'
import {Text, TextInput, View} from 'react-native'


let comp = Component

class CoolTranslator extends comp {
    constructor(props) {
        super(props)
        this.state = {text: ''}
    } //end of constructor 

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput 
                style={{height: 40}}
                placeholder="Type here"
                onChangeText={(text) => this.setState({text})} />

                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map(
                        (word) => word && '😎' 
                    ).join(' ')}
                </Text>
            </View>
        )
    }
}

export default CoolTranslator