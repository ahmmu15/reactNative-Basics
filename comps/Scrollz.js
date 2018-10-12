import React, { Component } from 'react'
import { Text, View, ViewPagerAndroid } from 'react-native'

let comp = Component

class Scrollz extends comp {
    render() {
        return (
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={0}>
                <View style={styles.pageStyle} key="1">
                    <Text style={styles.textStyle}>First page</Text>
                </View>
                <View style={styles.pageStyle} key="2">
                    <Text style={styles.textStyle}>Second page</Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}

var styles = {
    viewPager: {
      flex: 1
    },
    pageStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    textStyle: {
        fontSize: 40
    }
  }

export default Scrollz