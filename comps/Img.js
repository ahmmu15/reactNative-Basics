import React, {Component} from 'react'
import {Image} from 'react-native'

let comp = Component

class Bananas extends comp {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }

        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        )
    }
}


export default Bananas