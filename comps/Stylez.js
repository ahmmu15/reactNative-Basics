import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

let comp = Component

class Texting extends comp {
    render() {
        return(

            // applying style
            // <View>
            //     <Text style={styles.bigBlue}>This is fucking Awesome!</Text>
            //     <Text style={styles.red}>This is Not fucking Awesome!</Text>
            // </View>


            // fixed dimentions
            // <View>
            //     <View style={{width: 50, height: 50, backgroundColor: 'tomato'}} />
            //     <View style={{width: 100, height: 100, backgroundColor: 'lime'}} />
            //     <View style={{width: 200, height: 200, backgroundColor: 'powderblue'}} />
            // </View>

            // flex dimentions 
            // <View style={{flex: 1}}>
            //     <View style={{flex: 1, backgroundColor: 'tomato'}} />
            //     <View style={{flex: 2, backgroundColor: 'lime'}} />
            //     <View style={{flex: 3, backgroundColor: 'blue'}} />
            // </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'tomato'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'lime'}} />
            </View>
        )
    }
}

// defined styles rules
const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red'
    }
})

export default Texting