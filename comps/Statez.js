import React, {Component} from 'react'
import {Text, View} from 'react-native'

let comp = Component

class Blink extends comp {
    // a constructor is a method thats been called on app init (when it starts)
    constructor(props) {
        super(props)
        this.state = {isShowingText: true}


    // toggle the stae every second
    setInterval(
        () => {
            this.setState(
                previousState => {
                    return {isShowingText: !previousState.isShowingText}
                }
            ), 2000
        }
    )
} // end of constructor!

render() {
    // basically check if the isShowingText is true, then display the text .. otherwise just render ablank text
    let display = this.state.isShowingText ? this.props.text : ''

    return (
        <Text>{display}</Text>
    )
}
} // end of Blink class!


class BlinkApp extends comp {
    render() {
        return(
            <View>
                <Blink text="I love you!" />
            </View>
        )
    }
}

export default BlinkApp