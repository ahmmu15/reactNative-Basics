import React, {Component} from 'react'
import {FlatList, Text, View} from 'react-native'

let comp = Component

class Flatlitz extends comp {
    render() {
        return(
            <View>
                <FlatList
                    data={
                        [
                            {key: 'John'},
                            {key: 'Demo'},
                            {key: 'Lemo'},
                            {key: 'Blaboo'},
                            {key: 'Zandoo'},
                            {key: 'Doe'},
                            {key: 'DEE'},
                            {key: 'Jocon'}
                        ]
                    } //ends of data

                    renderItem={
                        ({item}) =>
                        <Text>{item.key}</Text>
                    }
                >
                </FlatList>
            </View>
        )
    }
}

export default Flatlitz