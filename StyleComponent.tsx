import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import poto1 from './foto1.jpg'

const StyleComponent = () => {
    return (
        <View>
            <Text style={style.Text}>stylr component</Text>
            <View style={{
                width: 200, height: 200, backgroundColor: '#0abde3', borderWidth: 2,
                borderColor: 'blue', marginTop: 20, marginLeft: 20,
            }} ></View>
            <View style={{
                padding: 12, backgroundColor: '#0abde3',
                width: 212, borderRadius: 8,
                marginTop: 19,
            }}>
                <Image style={StylePoto.Image} source={poto1} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>Halo Teman Teman</Text>
                <Text style={{ marginTop: 20, color: 'red', fontSize: 20 }}>Salam Kenal</Text>
                <Text style={{ marginTop: 25 }}>HAAAAAA</Text>
                <View style={Tombol.View}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                        Beli
                    </Text>
                </View>
            </View>
        </View>
    )
}

const Tombol = StyleSheet.create({
    View: {
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 5,
        paddingVertical: 5,
    }
})

const StylePoto = StyleSheet.create({
    Image: {
        width: 188,
        height: 107,
        borderRadius: 8,
    }
})

const style = StyleSheet.create({
    Text: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    }
})


export default StyleComponent;