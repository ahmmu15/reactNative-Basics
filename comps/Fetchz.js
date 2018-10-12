import React, {Component} from 'react'
import {FlatList, ActivityIndicator, Text, View} from 'react-native'

let comp = Component

class Fetchz extends comp {

    constructor(props) {
        super(props)
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then(
            (recievedData) => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: recievedData.movies 
                    },
                    function() {
                        //some code goes here
                    }
                )
            }
        ) // ends of then()
        .catch(
            (error) => console.log(error)
        )
    } //ends of componentDidMount()

    render() {
        if(this.state.isLoading) {
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator />
            </View>
        } // ends of if

        return(
            <View>
                <FlatList
                    data = {this.state.dataSource}
                    renderItem = {
                        ({item}) => <Text>{item.title}, {item.releaseYear}</Text>
                    }
                    keyExtractor = {
                        ({id}, index) => id
                    }
                />
            </View>
        )
    }
}

export default Fetchz