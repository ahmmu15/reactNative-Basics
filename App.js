import React, {Component} from 'react'
import {Text, View} from 'react-native'

import Bananas from './comps/Img'
import LotsOfThings from './comps/Propz'
import Statez from './comps/Statez'
import Texting from './comps/Stylez'
import CoolTranslator from './comps/Inputz'
import Buttonz from './comps/Btnz'
import Touchablez from './comps/Touchablez'
import Scrollz from './comps/Scrollz'
import Flatlitz from './comps/FlatList'
import Fetchz from './comps/Fetchz'


let comp = Component

class HelloWorldApp extends comp {
  render() {
    return (
      // <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      //   {/* <Text>Hello World</Text> */}
      //   {/* <Bananas /> */}
      //   {/* <LotsOfThings /> */}
      //   {/* <Statez /> */}
      //   {/* <Texting /> */}
      //   {/* <CoolTranslator style={{flex: 1}}/> */}
      //   {/* <Buttonz /> */}
      //   {/* <Touchablez /> */}
      // </View>
        // <Scrollz />
        // <Flatlitz />
        <Fetchz />

    )
  }
}

export default HelloWorldApp