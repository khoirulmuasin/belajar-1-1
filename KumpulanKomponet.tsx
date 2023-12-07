import React, { Component } from 'react'
import { Text, View, TextInput, Image, } from 'react-native'

const KumpulanKomponet = () => {
    return (
        <View>
            <Text style={{ fontSize: 30, color: 'blue' }}>Halo</Text>
            <Text>Halo1</Text>
            <Text>Halo2</Text>
            <Foto />
            <Kata />
            <Input />
            <Kotak />
            <Profile />
            <Inpu1 />
        </View>
    )
}

const Foto = () => {
    return (
        <Image source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/FTOfaG5coODpnvPfVcka2r4P5V4=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3167999/original/084845700_1593662619-Template_Landscape_1_.jpg' }}
            style={{ width: 300, height: 300, marginBottom: 10, marginLeft: 10 }} />
    )
}

const Kata = () => {
    return (
        <Text>INI BARU</Text>
    )
}

const Input = () => {
    return (
        <View>
            <TextInput style={{ borderWidth: 1, paddingTop: 5, }}></TextInput>
            <TextInput style={{ borderWidth: 1, paddingTop: 5, }}></TextInput>
        </View>
    )
}

class Kotak extends Component {
    render() {
        return <Text>Class Component</Text>
    }
}

class Profile extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'https://assets.kompasiana.com/items/album/2022/08/05/spongebob-jellyfishing-by-athenatt-da6y2g-62ec8cd408a8b514d7326582.jpg?t=o&v=770' }}
                    style={{ width: 100, height: 100, marginTop: 39, borderRadius: 50 }} />
                <Text style={{ fontSize: 50, color: 'red' }}>Halo Teman</Text>
            </View>
        )
    }
}

class Inpu1 extends Component {
    render() {
        return <TextInput style={{ borderWidth: 1 }}></TextInput>
    }
}

export default KumpulanKomponet;