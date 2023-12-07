import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Coba2 = () => {
    return (
        <View style={ViewCoba.View}>
            <Image style={FotoCoba.Image} source={{ uri: 'https://i.pinimg.com/originals/83/8d/9b/838d9be84a7b7be015debab68dc351d0.jpg' }} />
        </View>
    )
}

const FotoCoba = StyleSheet.create({
    Image: {
        width: 188,
        height: 107,
        borderRadius: 10,
        margin: 5
    }
})

const ViewCoba = StyleSheet.create({
    View: {
        backgroundColor: 'blue',
        width: 200,
        height: 200,
        borderRadius: 10,
        margin: 5
    }
})

export default Coba2;