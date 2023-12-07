import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Coba3 extends Component {
    render() {
        return (
            <View>
                <Text style={Tulis.Text}> textInComponent </Text>
            </View>
        )
    }
}

const Tulis = StyleSheet.create({
    Text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center'
    }
})

export default Coba3;